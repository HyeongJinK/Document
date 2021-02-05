# 제1장. 테스트 주도형 개발을 통한 첫 단계

이 책은 간단한 형식을 따르고 있다: 그것은 테스트 중심 접근법을 이용한 React 어플리케이션을 구축하는 과정이다. 폼  구축, 인터페이스 구성, 애니메이션 요소 구성 등 React 경험의 다양한 부분을 다룰 겁니다. 우리는 또한 Ract Router, Redex, GraphQL을 통합할 것이다. 모두 테스트에 의해 안내된다. 초점은 React의 이러한 기능이 어떻게 작동하느냐가 아니라 어떻게 테스트하고 자신 있게 사용하고 있는지 확인하는 데 있다.

모던자바스크립트 프로그래머들은 다른 사람들이 개발한 패키지에 크게 의존한다. 이것은 우리가 바퀴를 재발명하는 것이 아니라 혁신에 집중할 수 있게 해준다. 그러나 단점은 우리가 다루고 있는 기술에 대해 항상 완전히 이해하지는 못한다는 것이다. 우리는 단지 그것들을 배울 필요가 없다.

무엇보다도, TDD(Test-Driven Development)는 새로운 프레임워크와 라이브러리를 배우는 데 효과적인 기술이다. 그것은 React와 그것의 생태계에 관한 책에 매우 적합하게 만든다. 이 책은 당신이 이전에 경험하지 못했던 방식으로 React를 탐험할 수 있게 해줄 것이다.

TDD를 처음 접하는 경우, 윤곽이 표시된 단계 중 일부는 머리를 긁게 할 수 있다. 당신은 아마도 왜 우리가 응용 프로그램을 만들기 위해 그렇게 엄청난 노력을 하는지 궁금할 것이다. 이런 식으로 우리의 소프트웨어를 명시하는 것은 엄청난 가치가 있다. 우리의 요구 사항을 분명히 함으로써, 우리는 변화에 대한 두려움 없이 우리의 코드를 조정할 수 있는 능력을 얻는다. 우리는 기본적으로 자동 회귀 테스트를 받는다. 우리의 테스트는 우리의 코드를 코딩하고, 그 코멘트는 우리가 실행했을 때 증명할 수 있다. 우리는 동료들과 의사 결정 과정을 전달하는 방법을 얻는다. 그리고 당신은 곧 당신이 작업하고 있는 코드에 대해 가지고 있는 더 높은 수준의 신뢰와 자신감을 인식하기 시작할 것이다. 나 같은 사람이면 그 감정에 푹 빠져서 그 감정 없이는 일하기 힘들 거야.

이 책의 제1절과 제2절은 미용실을 위한 약속 시스템을 구축하는 것을 포함한다. 너무 혁명적인 것은 아니지만, 샘플 신청이 진행됨에 따라, 그것은 많은 범위를 제공한다. 우리는 이 장에서 그것을 시작할 것이다. 섹션 3과 섹션 4는 완전히 다른 응용 프로그램인 로고 인터프리터를 사용한다. React 환경을 더 많이 탐색할 수 있는 재미있는 방법을 알려드립니다.

이 장, 그리고 사실 이 책 전체가 React에 대한 첫 번째 원칙 접근법을 취한다. 우리는 TDD 이야기를 천천히 밝혀내기 위한 사소한 단계부터 시작한다. 우리는 라이브러리와 패키지를 사용하는 것보다 우리만의 코드를 만드는 것을 더 선호할 것이다. 우리는 빈 디렉토리에서 시작하여 테스트별로 응용프로그램을 작성하기 시작할 것이다. 그 과정에서 우리는 테스트 주도 개발 및 React 이면에 있는 많은 근본적인 아이디어들을 발견하게 될 것이다.

이 장에서는 다음 주제를 다룬다.

* 처음부터 새로운 React 프로젝트 생성
* 첫 번째 테스트로 데이터 표시
* 작업 리팩터링
* 훌륭한 테스트 작성
* 렌더링 목록 및 상세 뷰

This book follows a simple format: it's a walk-through of building React applications using a test-driven approach. We'll touch on many different parts of the React experience, including building forms, composing interfaces, and animating elements. We'll also integrate React Router, Redux, and GraphQL, all guided by tests. The focus isn't on how these features of React work, but rather on how to test them and make sure you're using them with confidence.

ModernJavaScript programmers rely heavily on packages that other people have developed. This allows us to concentrate on innovating, not reinventing, the wheel. The downside, however, is that we don't always have a full understanding of the technologies we’re dealing with. We simply don't need to learn them.

Among other things, Test-Driven Development(TDD) is an effective technique for learning new frameworks and libraries. That makes it very well suited for a book on React and its ecosystem. This book will allow you to explore React in a way that you may not have experienced before.

If you're new to TDD, some of the steps outlined may leave you scratching your head. You may find yourself wondering why we're going to such Herculean efforts to build an application. There is tremendous value to be gained in specifying our software in this way. By being crystal clear about our requirements, we gain the ability to adapt our code without fear of change. We gain automated regression testing by default. Our tests comment our code, and those comments are verifiable when we run them. We gain a method of communicating our decision-making process with our colleagues. And you'll soon start to recognize the higher level of trust and confidence you have in the code you're working on. If you're anything like me, you'll get hooked on that feeling and find it hard to work without it.

Sections 1 and 2 of this book involve building an appointments system for a hair salon—nothing too revolutionary, but as sample applications go, it offers plenty of scope. We'll get started with that in this chapter. Sections 3 and 4 use an entirely different application: a Logo interpreter. Building that offers a fun way to explore more of the React landscape.

This chapter, and in fact this whole book, takes a first principles approach to React. We start with minuscule steps to slowly uncover the TDD story. We'll prefer rolling our own code to using libraries and packages. We will start from an empty directory and begin building out our application, test by test. Along the way, we’ll discover a lot of the fundamental ideas behind test-driven development and React.

The following topics will be covered in this chapter:

* Creating a new React project from scratch
* Displaying data with your first test
* Refactoring your work
* Writing great tests
* Rendering lists and detail views