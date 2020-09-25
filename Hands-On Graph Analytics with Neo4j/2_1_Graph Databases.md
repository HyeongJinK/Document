# Graph Databases

그래프 데이터베이스는 지난 몇 년간 점점 더 많은 관심을 받고 있다. 그래프로 구축된 데이터 모델은 문서 지향 데이터베이스의 단순성과 SQL 테이블의 명확성을 결합한다. 그 중에서도 Neo4j는 데이터베이스를 비롯한 대규모 생태계가 함께 제공되는 데이터베이스로, GRANDstack과 같은 웹 애플리케이션을 구축하는 툴과 머신러닝 파이프라인에서 그래프 데이터를 사용할 수 있는 툴, 그래프 데이터 사이언스 라이브러리 등이 있다. 이 책은 그 도구들에 대해 논할 것이지만, 우선 처음부터 시작합시다.

그래프 데이터베이스에 대해 말하는 것은 그래프에 대해 말하는 것을 의미한다. 여러분이 그래프 이론에 대한 모든 세부사항을 알 필요는 없더라도, 여러분이 사용하고 있는 도구의 기초가 되는 기본 개념들 중 일부를 배우는 것은 항상 좋은 생각이다. 이 장에서는 그래프를 정의하고 그래프와 그래프 적용에 대한 간단하고 덜 간단한 예제를 제공하는 것으로 시작할 것이다. 그런 다음 잘 알려진 SQL 테이블에서 그래프 데이터 모델링으로 이동하는 방법을 살펴보기로 한다. 우리는 Neo4j와 그것의 구성 요소를 소개함으로써 결론을 내리고, Neo4j로 무엇을 할 수 있고, 무엇을 할 수 없는 지를 이해하기 위해 몇 가지 설계 원리를 검토할 것이다.

이 장에서는 다음 주제를 다룬다.

* 그래프 정의 및 예제
* SQL에서 그래프 데이터베이스로 이동
* Neo4j: 노드, 관계 및 속성 모델
* 그래프 속성 이해
* Neo4j의 그래프 모델링에 대한 고려 사항

Graph databases have gained increasing attention in the last few years. Data models built from graphs bring together the simplicity of document-oriented databases and the clarity of SQL tables. Among others, Neo4j is a database that comes with a large ecosystem, including the database, but also tools to build web applications, such as the GRANDstack, and tools to use graph data in a machine learning pipeline, as well as the Graph Data Science Library. This book will discuss those tools, but let's first start from the beginning.

Talking about graph databases means talking about graphs. Even if you do not need to know all the details about graph theory, it’s always a good idea to learn some of the basic concepts underlying the tool you are using. In this chapter, we will start by defining graphs and giving some simple and less simple examples of graphs and their applications. We will then see how to move from the well-known SQL tables to graph data modeling. We’ll conclude by introducing Neo4j and its building blocks, and review some design principles to understand what can and can’t be done with Neo4j.

This chapter will cover the following topics:

* Graph definition and examples
* Moving from SQL to graph databases
* Neo4j: the nodes, relationships, and properties model
* Understanding graph properties
* Considerations for graph modeling in Neo4j