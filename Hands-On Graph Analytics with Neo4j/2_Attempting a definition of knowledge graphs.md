# Attempting a definition of knowledge graphs (지식 그래프의 정의 시도)

최신 애플리케이션은 매일 페타 바이트의 데이터를 생성합니다. 예를 들어 2019 년 한 해 동안 매분 Google 검색 건수는 44 억 건 이상으로 추산되었습니다. 같은 시간 동안 1,800 억 개의 이메일과 500,000 개 이상의 트윗이 전송되는 반면 YouTube에서 시청 한 동영상 수는 약 45 억 개입니다. 이 데이터를 구성하고 지식으로 변환하는 것은 진정한 도전입니다.

Modern applications produce petabytes of data every day. As an example, during the year 2019, every minute, the number of Google searches has been estimated to be more than 4.4 billion. During the same amount of time, 180 billion emails, and more than 500,000 tweets are sent, while the number of videos watched on YouTube is about 4.5 billion. Organizing this data and transforming it into knowledge is a real challenge.

Knowledge graphs try to address this challenge by storing the following in the same data structure:

Entities related to a specific field, such as users or products
Relationships between entities, for instance, user A bought a surfboard
Context to understand the previous entities and relationships, for instance, user A lives in Hawaii and is a surf teacher
Graphs are the perfect structure to store all this information since it is very easy to aggregate data from different data sources: we just have to create new nodes (with maybe new labels) and the relationships. There is no need to update the existing nodes.

Those graphs can be used in many ways. We can, for instance, distinguish the following:

Business knowledge graph: You can build such a graph to address some specific tasks within your enterprise, such as providing fast and accurate recommendations to your customers.
Enterprise knowledge graph: To go even beyond the business knowledge graph, you can build a graph whose purpose is to support multiple units in the enterprise.
Field knowledge graph: This goes further and gathers all information about a specific area such as medicine or sport.
Since 2019, knowledge graphs even have their own conference organized by the University of Columbia in New York. You can browse the past events' recordings and learn more about how organizations use knowledge graphs to empower their business at https://www.knowledgegraph.tech/.

In the rest of this section, we will learn how to build a knowledge graph in practice. We will study several ways:

Structured data: Such data can come from a legacy database such as SQL.
Unstructured data: This covers textual data that we will analyze using NLP techniques.
Online knowledge graphs, especially Wikidata (https://www.wikidata.org).
Let's start with the structured data case.