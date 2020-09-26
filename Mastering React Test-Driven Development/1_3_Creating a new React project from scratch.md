# Creating a new React project from scratch (React 프로젝트 생성부터)

React 앱을 만드는 표준 템플릿이 있는데, 바로 create-react-app 애플리케이션 템플릿이다. 여기에는 모든 React 애플리케이션이 필요로 하는 일부 표준 의존성 및 보일러 플레이트 코드가 포함된다. 하지만, 그것은 favicon.ico, 샘플 로고, CSS 파일들과 같은 일부 추가 항목들을 포함하고 있다. 이것들은 의심할 여지 없이 유용하지만, 프로젝트 시작 시점에 이를 여기에 두는 것은 테스트 주도 개발자의 핵심 원칙 중 하나인 YAGNI(You Ain't Need It, YAGNI)가 상충된다.

이 원칙은 당신이 그것이 필요하다고 확신할 때까지 당신의 프로젝트에 어떤 것을 추가하는 것을 보류해야 한다고 말한다. 아마도 그때 당신의 팀이 그것을 위한 사용자 이야기를 반복에 추가할 때, 혹은 고객이 그것을 요구할 때일 것이다. 그때까지 YAGNI.

이 책에서 다루는 주제인데, 우리는 지금 당장 create-react-app을 피하는 것으로 시작할 것이다. 당신은 모든 자바스크립트 프로젝트를 처음부터 시작할 수 있으며, 매번 기본을 살펴보는 데서 어떤 즐거움을 찾을 수 있다.

## NPM 설치

npm 명령줄 도구와 Node.js 실행 환경을 광범위하게 활용할 것이다. 매우 자주 발생하는 테스트를 실행할 때마다 npm 명령을 실행해야 한다.

이 장의 마지막 부분에서, 우리는 또한 npm을 우리의 어플리케이션을 패키징하는 데 사용할 것이다.

터미널 창(또는 Windows(윈도우)의 경우 명령 프롬프트)을 열고 다음을 입력하여 컴퓨터에 이미 설치되어 있는지 확인하십시오.

```shell
npm -v
```

명령어를 찾을 수 없으면 Node.js 웹 사이트로 이동하여 설치 방법에 대한 자세한 내용을 확인하십시오. URL은 이 장의 끝에 포함되어 있다.

npm 프로그램은 자체 업데이트 방법을 알고 있기 때문에 설치된 경우 최신 버전으로 업데이트하십시오. 명령줄에서 다음을 입력하여 이 작업을 수행할 수 있음:

```
npm install npm@latest -g
```

나는 이 책을 쓰기 위해 버전 6.9.0을 사용하고 있다. 여기에 포함된 코드 샘플에 문제가 있는 경우 NPM 버전이 다를 수 있으므로 계속 진행하면서 이 점을 명심하십시오.

```
Note
그러나 또 다른 resource negotiato(YARN)는 NPM의 대안이며, 당신이 그것을 사용하기로 선택한다면 나는 그것을 반대하지 않을 것이다. 이 책에는 단 몇 개의 npm 명령만 나와 있는데, 만약 당신이 YARN을 고수하고 있다면, 당신은 npm 명령을 YARN 명령으로 변환하는 방법을 이미 알고 있다고 가정한다.
```

## 새 Jest 프로젝트 생성

```
Note
이 섹션의 Git 태그는 시작점이다. 그것은 어떤 코드도 포함하고 있지 않다. 단지 README.md 파일일 뿐이다. 만약 당신이 책의 Git 저장소를 사용하기를 원한다면, 당신은 당신이 이 태그로부터 분기되었는지 확인해야 한다. 자세한 수행 지침은 서문의 1장 이전 시작 섹션에 수록되어 있다.
```

Now that NPM is installed, we can create our project:

If you're following along with the book's Git 

1. repository, open a Terminal window and navigate to the repository directory that you cloned in the Getting started before Chapter 1 section of the Preface. Otherwise, simply navigate to your local projects directory.
2. Create a new directory using mkdir appointments and then change to it using cd appointments.
3. Enter the npm initcommand, which begins the process of initializing a new NPM project and generating a package.json file for you.
4. The first questions ask you to provide a package name, version, description, and an entrypoint. Since we're building an appointments system, you can call it appointments. Accept the default version (by just hittingEnter), and enter a description ofAppointments system. You can accept the default entrypoint too.
5. Next, you'll be asked for a testcommand, for which you should type injest. This will enable you to run tests by using the npm test shortcut command.

```
Note
Don't worry if you miss this; you can set it afterward by adding "test": "jest" to the scripts section of the generated package.json.
```

6. You'll be asked to specify a repository, which you could just set as example.comfor now. If you don’t fill these fields in,npmwill print warnings every time you run a command.
7. You can accept the defaults for everything else.

```
Note
You may wonder why we filled out the repository field. TDD lovesfast feedback cycles. Prioritize cleaning your screen and command outputs of as much noise as possible. Any time you see something that is destroying clarity, either fix it right then and there, or put it as an action at the top of your to-do list. In this particular case, you could also add "private": true to your package.json, instead of setting the repository field.
```

8. Hit Enter on the remaining questions to finish the initialization process.
9. Install Jest using npm install --save-dev jest.

You will see the bottom line of your Terminal fill up with a fast-changing stream of package information as NPM installs dependent packages (a paltry 553 packages at the time of writing). You may see some warnings depending on the platform you are installing on, but these can be ignored. Once complete, you should see this:

```
npm notice created a lockfile as package-lock.json. You should commit this file.

+ jest@24.7.1
+ added 553 packages from 373 contributors and audited 849842 packages in 16.304s
+ found 0 vulnerabilities
```

## Commit early and often

The second sentence of that command output (You should commit this file) is a good cue for us to commit for the first time.

TDD provides natural breakpoints for you to commit code. If you’re starting out with TDD, I’d recommend committing to source control after every single test. That might seem like overkill for your projects at work, but as you're learning, it can be a very effective tool.

If you've ever watched The Weakest Link, you'll know that contestants can choose to bank their winnings at any time, which decreases their risk of losing money but reduces their earning potential. With git, you can use git addto effectively bank your code. This saves a snapshot of your code but does not commit it. If you make a mess in the next test, you can revert to the last banked state. I tend to do this after every test. And, unlike in The Weakest Link, there's no downside to banking!

Committing early and often simplifies commit messages. If you have just one test in a commit, then you can use the test description as your commit message. No thinking is required.

If you're using git, use the following commands to commit what you’ve done so far:

```
git init
echo "node_modules" > .gitignore
git add .
git commit -m "Blank project with Jest dependency"
```

## Bringing in React and Babel

Let's install React. That's actually two packages:

```
npm install --save react react-dom
```

React makes heavy use of JavaScriptXML (JSX), which we need Babel to transpile for us. Babel also transpiles our modern ES6 and ES7 constructs for us.

```
Note
The following information is accurate for Babel 7. If you're using a later version, you may need to adjust the installation instructions accordingly.
```

Thankfully, Jest already includes Babel, so we just need to install presets and plugins:

```
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```

A Babel preset is a set of plugins. Each plugin enables a specific feature of the ECMAScript standards, or a preprocessor such as JSX.

The env preset brings in essentially everything possible. It should really be configured with target execution environments. See the Further reading section at the end of this chapter for more information.

We need to enable the packages we've just installed. Create a new file, .babelrc, and add the following:

```
{
  "presets": ["@babel/env", "@babel/react"],
  "plugins": ["@babel/transform-runtime"]
}
```

With that, you're all set to write some tests. You may wish to check in at this point.
---
---


There's a standard template for creating React apps: the create-react-app application template. This includes some standard dependencies and boilerplate code that all React applications need. However, it also contains some extra items such as favicon.ico, a sample logo, and CSS files. While these are undoubtedly useful, having them here at the very start of a project is at odds with one of the test-driven developer's core principles: You Ain't Gonna Need It (YAGNI).

This principle says that you should hold off adding anything to your project until you're really sure that it's necessary. Perhaps that's when your team adds a user story for it into the iteration, or maybe it's when a customer asks for it. Until then, YAGNI.

It's a theme that runs throughout this book and we'll start right now by choosing to avoid create-react-app. You can always start every JavaScript project from scratch, and there's a certain joy to be found in going over the basics each time.

## Installing NPM

We’ll be making extensive use of the npm command-line tool and the Node.js execution environment. Each time you run your tests, which will be very frequently, you'll be required to run an npm command.

Toward the end of the chapter, we'll also use npm to package our application.

You can find out if you already have it installed on your machine by opening a Terminal window (or Command Prompt if you’re on Windows) and typing the following:

```
npm -v
```

If the command isn’t found, head on over to the Node.js website for details on how to install. The URL is included at the end of this chapter.

The npm program knows how to update itself, so if it's installed, I recommend you ensure you’re on the latest version. You can do this on the command line by typing this:

```
npm install npm@latest -g
```

I'm using version 6.9.0 to write this book. If you have any issues with the code samples contained here, differing NPM versions could be one of the causes, so please bear that in mind as you continue.

```
Note
Yet another resource negotiator (YARN) is an alternative to NPM, and I won’t hold it against you if you choose to use it. There are only a handful of npm commands in this book—I assume that if you’re sticking with YARN, then you’ll already know how to convert npm commands to yarn commands.
```

## Creating a new Jest project

```
Note
The Git tag for this section is starting-point. It doesn't contain any code; just a README.md file. If you want to follow along using the book's Git repository then you should ensure you've branched from this tag. Detailed instructions from doing that are in the Getting started before Chapter 1 section of the Preface.
```

Now that NPM is installed, we can create our project:

If you're following along with the book's Git 

1. repository, open a Terminal window and navigate to the repository directory that you cloned in the Getting started before Chapter 1 section of the Preface. Otherwise, simply navigate to your local projects directory.
2. Create a new directory using mkdir appointments and then change to it using cd appointments.
3. Enter the npm initcommand, which begins the process of initializing a new NPM project and generating a package.json file for you.
4. The first questions ask you to provide a package name, version, description, and an entrypoint. Since we're building an appointments system, you can call it appointments. Accept the default version (by just hittingEnter), and enter a description ofAppointments system. You can accept the default entrypoint too.
5. Next, you'll be asked for a testcommand, for which you should type injest. This will enable you to run tests by using the npm test shortcut command.

```
Note
Don't worry if you miss this; you can set it afterward by adding "test": "jest" to the scripts section of the generated package.json.
```

6. You'll be asked to specify a repository, which you could just set as example.comfor now. If you don’t fill these fields in,npmwill print warnings every time you run a command.
7. You can accept the defaults for everything else.

```
Note
You may wonder why we filled out the repository field. TDD lovesfast feedback cycles. Prioritize cleaning your screen and command outputs of as much noise as possible. Any time you see something that is destroying clarity, either fix it right then and there, or put it as an action at the top of your to-do list. In this particular case, you could also add "private": true to your package.json, instead of setting the repository field.
```

8. Hit Enter on the remaining questions to finish the initialization process.
9. Install Jest using npm install --save-dev jest.

You will see the bottom line of your Terminal fill up with a fast-changing stream of package information as NPM installs dependent packages (a paltry 553 packages at the time of writing). You may see some warnings depending on the platform you are installing on, but these can be ignored. Once complete, you should see this:

```
npm notice created a lockfile as package-lock.json. You should commit this file.

+ jest@24.7.1
+ added 553 packages from 373 contributors and audited 849842 packages in 16.304s
+ found 0 vulnerabilities
```

## Commit early and often

The second sentence of that command output (You should commit this file) is a good cue for us to commit for the first time.

TDD provides natural breakpoints for you to commit code. If you’re starting out with TDD, I’d recommend committing to source control after every single test. That might seem like overkill for your projects at work, but as you're learning, it can be a very effective tool.

If you've ever watched The Weakest Link, you'll know that contestants can choose to bank their winnings at any time, which decreases their risk of losing money but reduces their earning potential. With git, you can use git addto effectively bank your code. This saves a snapshot of your code but does not commit it. If you make a mess in the next test, you can revert to the last banked state. I tend to do this after every test. And, unlike in The Weakest Link, there's no downside to banking!

Committing early and often simplifies commit messages. If you have just one test in a commit, then you can use the test description as your commit message. No thinking is required.

If you're using git, use the following commands to commit what you’ve done so far:

```
git init
echo "node_modules" > .gitignore
git add .
git commit -m "Blank project with Jest dependency"
```

## Bringing in React and Babel

Let's install React. That's actually two packages:

```
npm install --save react react-dom
```

React makes heavy use of JavaScriptXML (JSX), which we need Babel to transpile for us. Babel also transpiles our modern ES6 and ES7 constructs for us.

```
Note
The following information is accurate for Babel 7. If you're using a later version, you may need to adjust the installation instructions accordingly.
```

Thankfully, Jest already includes Babel, so we just need to install presets and plugins:

```
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```

A Babel preset is a set of plugins. Each plugin enables a specific feature of the ECMAScript standards, or a preprocessor such as JSX.

The env preset brings in essentially everything possible. It should really be configured with target execution environments. See the Further reading section at the end of this chapter for more information.

We need to enable the packages we've just installed. Create a new file, .babelrc, and add the following:

```
{
  "presets": ["@babel/env", "@babel/react"],
  "plugins": ["@babel/transform-runtime"]
}
```

With that, you're all set to write some tests. You may wish to check in at this point.