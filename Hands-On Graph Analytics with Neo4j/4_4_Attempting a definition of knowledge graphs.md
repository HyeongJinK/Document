# Attempting a definition of knowledge graphs (지식 그래프의 정의 시도)

최신 애플리케이션은 매일 페타바이트 단위의 데이터를 생성한다. 일례로 2019년 한 해 동안 매 분마다 구글 검색 건수가 44억 건 이상일 것으로 추산됐다. 같은 기간 동안 1800억 건의 이메일과 50만 건 이상의 트윗이 발송되는 반면 유튜브에서 시청하는 동영상은 약 45억 건에 달한다. 이 데이터를 정리하고 지식으로 전환하는 것은 정말 어려운 일이다.

지식 그래프는 다음 사항을 동일한 데이터 구조에 저장하여 이 문제를 해결하려고 한다.

* 사용자 또는 제품과 같은 특정 필드 관련 엔티티
* 엔티티 간의 관계(예: 사용자 A가 서프보드를 구입함)
* 이전의 실체와 관계를 이해하기 위한 컨텍스트(예: 사용자 A는 하와이에 살고 있으며 서핑 교사)

그래프는 서로 다른 데이터 소스의 데이터를 수집하는 것이 매우 쉽기 때문에 이 모든 정보를 저장하기에 완벽한 구조다: 우리는 단지 새로운 노드(아마도 새로운 라벨로)와 관계를 만들면 된다. 기존 노드를 업데이트할 필요가 없다.

그래프들은 여러 가지 방법으로 사용될 수 있다. 예를 들어, 우리는 다음을 구별할 수 있다.

* 비즈니스 지식 그래프(Business knowledge graph): 고객에게 빠르고 정확한 권장 사항을 제공하는 등 기업 내에서 특정 작업을 처리하기 위해 이러한 그래프를 만들 수 있다.
* 엔터프라이즈 지식 그래프(Enterprise knowledge graph): 비즈니스 지식 그래프를 넘어서면 기업에서 여러 단위를 지원하는 데 목적이 있는 그래프를 만들 수 있다.
* 현장 지식 그래프(Field knowledge graph): 이것은 더 나아가 의약품이나 스포츠와 같은 특정 분야에 대한 모든 정보를 수집한다.

2019년부터 지식 그래프는 뉴욕 컬럼비아 대학이 주관하는 자체 콘퍼런스까지 갖고 있다. 과거 이벤트의 기록을 찾아보고 조직이 https://www.knowledgegraph.tech/에서 어떻게 지식 그래프를 사용하여 비즈니스 역량을 강화하는지에 대해 자세히 알아보십시오.

이 섹션의 나머지 부분에서는 실제로 지식 그래프를 작성하는 방법에 대해 배우겠다. 우리는 다음과 같은 몇 가지 방법을 연구할 것이다.

* 구조화된 데이터: 이러한 데이터는 SQL과 같은 레거시 데이터베이스에서 나올 수 있다.
* 비정형 데이터: 이것은 우리가 NLP 기법을 사용하여 분석할 텍스트 데이터를 다룬다.
* 온라인 지식 그래프, 특히 Wikidata(https://wwww)wikidata.org).
먼저 구조화된 데이터 사례부터 살펴보시죠.

Modern applications produce petabytes of data every day. As an example, during the year 2019, every minute, the number of Google searches has been estimated to be more than 4.4 billion. During the same amount of time, 180 billion emails, and more than 500,000 tweets are sent, while the number of videos watched on YouTube is about 4.5 billion. Organizing this data and transforming it into knowledge is a real challenge.

Knowledge graphs try to address this challenge by storing the following in the same data structure:

* Entities related to a specific field, such as users or products
* Relationships between entities, for instance, user A bought a surfboard
* Context to understand the previous entities and relationships, for instance, user A lives in Hawaii and is a surf teacher

Graphs are the perfect structure to store all this information since it is very easy to aggregate data from different data sources: we just have to create new nodes (with maybe new labels) and the relationships. There is no need to update the existing nodes.

Those graphs can be used in many ways. We can, for instance, distinguish the following:

* Business knowledge graph: You can build such a graph to address some specific tasks within your enterprise, such as providing fast and accurate recommendations to your customers.
* Enterprise knowledge graph: To go even beyond the business knowledge graph, you can build a graph whose purpose is to support multiple units in the enterprise.
* Field knowledge graph: This goes further and gathers all information about a specific area such as medicine or sport.

Since 2019, knowledge graphs even have their own conference organized by the University of Columbia in New York. You can browse the past events' recordings and learn more about how organizations use knowledge graphs to empower their business at https://www.knowledgegraph.tech/.

In the rest of this section, we will learn how to build a knowledge graph in practice. We will study several ways:

* Structured data: Such data can come from a legacy database such as SQL.
* Unstructured data: This covers textual data that we will analyze using NLP techniques.
* Online knowledge graphs, especially Wikidata (https://www.wikidata.org).
Let's start with the structured data case.