# Building a knowledge graph from structured data(구조화된 데이터에서 지식 그래프 작성)

지식 그래프는 엔티티 간에 잘 알려진 관계를 가진 그래프 데이터베이스에 지나지 않는다.

우리는 제2장 Cypher Query 언어에서 지식 그래프를 만들기 시작했다. 실제로 우리가 그곳에서 만든 그래프는 GitHub에 있는 Neo4j 관련 리포지토리와 사용자들을 포함하고 있다. 이것은 Neo4j 생태계에 대해 우리가 가지고 있는 지식을 나타낸 것이다.

지금까지 그래프에는 두 가지 종류의 정보만 들어 있다.

* Neo4j 조직이 소유한 리포지토리 목록
* 각 리포지토리에 대한 기여자 목록

그러나 우리의 지식은 이것을 훨씬 뛰어넘어 확장될 수 있다. GitHub API를 사용하면 더 깊이 들어가 다음과 같은 사항을 수집할 수 있다.

* Neo4j의 각 기여자가 소유한 리포지토리 목록 또는 이들이 기부한 리포지토리 목록
* 각 리포지토리에 할당된 태그 목록
* 이러한 기여자 각각에 따른 사용자 목록
* 각 기여자를 따르는 사용자 목록

예를 들어, 각 리포지토리 기여자 및 해당 리포지토리가 소유한 리포지토리를 하나의 쿼리로 가져오자.

```cypher
MATCH (u:User)-[:OWNS]->(r:Repository)
CALL apoc.load.jsonParams("https://api.github.com/repos/" + u.login + "/" + r.name + "/contributors", {Authorization: 'Token ' + $token}, null) YIELD value AS item
MERGE (u2:User {login: item.login})
MERGE (u2)-[:CONTRIBUTED_TO]->(r)
WITH item, u2
CALL apoc.load.jsonParams(item.repos_url, {Authorization: 'Token ' + $token}, null) YIELD value AS contrib
MERGE (r2:Repository {name: contrib.name})
MERGE (u2)-[:OWNS]->(r2)
```

```
Tip
GitHub API의 요금 제한 감소로 인해 GitHub 토큰을 사용하지 않을 경우 이 쿼리가 실패하게 된다.
```

GitHub에 있는 Neo4j 커뮤니티에 대한 지식 그래프를 재생하고 확장할 수 있다. 다음 섹션에서는 NLP를 사용하여 이 그래프를 확장하고 프로젝트의 README 파일에서 정보를 추출하는 방법에 대해 배우겠다.

```
참고
앞의 쿼리는 앞 장에서 가져온 neo4j_repos_github.json의 데이터를 사용한다. 더욱이 리포지토리당 사용자 1명당 1건의 요청을 보내기 때문에 완료하는 데 5분 정도 시간이 걸릴 수 있다.
```


A knowledge graph is then nothing more than a graph database, with well-known relationships between entities.

We have actually already started building a knowledge graph in Chapter 2, Cypher Query Language. Indeed, the graph we built there contains the Neo4j-related repositories and users on GitHub: it is a representation of the knowledge we have regarding Neo4j ecosystem.

So far, the graph only contains two kinds of information:

* The list of repositories owned by the Neo4j organization
* The list of contributors to each of these repositories

But our knowledge can be extended much beyond this. Using the GitHub API, we can go deeper and, for instance, gather the following:

* The list of repositories owned by each contributor to Neo4j, or the list of repositories they contributed to
* The list of tags assigned to each repository
* The list of users each of these contributors follow
* The list of users following each contributor

For example, let's import each repository contributor and their owned repositories in one single query:

```
MATCH (u:User)-[:OWNS]->(r:Repository)
CALL apoc.load.jsonParams("https://api.github.com/repos/" + u.login + "/" + r.name + "/contributors", {Authorization: 'Token ' + $token}, null) YIELD value AS item
MERGE (u2:User {login: item.login})
MERGE (u2)-[:CONTRIBUTED_TO]->(r)
WITH item, u2
CALL apoc.load.jsonParams(item.repos_url, {Authorization: 'Token ' + $token}, null) YIELD value AS contrib
MERGE (r2:Repository {name: contrib.name})
MERGE (u2)-[:OWNS]->(r2)
```

```
Tip
Due to the reduced rate limit on the GitHub API, this query will fail if you are not using a GitHub token.
```

You can play around and extend your knowledge graph about the Neo4j community on GitHub. In the following sections, we will learn how to use NLP to extend this graph and extract information from the project's README file.

```
Note
The preceding query uses the data from neo4j_repos_github.json we imported in the preceding chapter. Moreover, since it sends one request per user per repository, it can take some time to complete (around 5 min).
```