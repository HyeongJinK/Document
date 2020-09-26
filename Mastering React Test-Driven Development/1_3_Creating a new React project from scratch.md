# Creating a new React project from scratch (React 프로젝트 생성부터)

React 앱을 만드는 표준 템플릿이 있는데, 바로 create-react-app 애플리케이션 템플릿이다. 여기에는 모든 React 애플리케이션이 필요로 하는 일부 표준 의존성 및 보일러 플레이트 코드가 포함된다. 하지만, 그것은 favicon.ico, 샘플 로고, CSS 파일들과 같은 일부 추가 항목들을 포함하고 있다. 이것들은 의심할 여지 없이 유용하지만, 프로젝트 시작 시점에 이를 여기에 두는 것은 테스트 주도 개발자의 핵심 원칙 중 하나인 YAGNI(You Ain't Need It, YAGNI)가 상충된다.

이 원칙은 당신이 그것이 필요하다고 확신할 때까지 당신의 프로젝트에 어떤 것을 추가하는 것을 보류해야 한다고 말한다. 아마도 그때 당신의 팀이 그것을 위한 사용자 이야기를 반복에 추가할 때, 혹은 고객이 그것을 요구할 때일 것이다. 그때까지 YAGNI.

이 책에서 다루는 주제인데, 우리는 지금 당장 create-react-app을 피하는 것으로 시작할 것이다. 당신은 모든 자바스크립트 프로젝트를 처음부터 시작할 수 있으며, 매번 기본을 살펴보는 데서 어떤 즐거움을 찾을 수 있다.

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