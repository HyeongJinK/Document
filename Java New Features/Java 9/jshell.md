## jshell

### 자바 REPL

```
C:\Program Files\Java\jdk-9\bin>jshell
|  Welcome to JShell -- Version 9-ea
|  For an introduction type: /help intro

jshell> /help
|  Type a Java language expression, statement, or declaration.
|  Or type one of the following commands:
|  /list [<name or id>|-all|-start]
|       list the source you have typed
|  /edit <name or id>
|       edit a source entry referenced by name or id
|  /drop <name or id>
|       delete a source entry referenced by name or id
|  /save [-all|-history|-start] <file>
|       Save snippet source to a file.
|  /open <file>
|       open a file as source input
|  /vars [<name or id>|-all|-start]
|       list the declared variables and their values
|  /methods [<name or id>|-all|-start]
|       list the declared methods and their signatures
|  /types [<name or id>|-all|-start]
|       list the declared types
|  /imports
|       list the imported items
|  /exit
|       exit jshell
|  /env [-class-path <path>] [-module-path <path>] [-add-modules <modules>] ...
|       view or change the evaluation context
|  /reset [-class-path <path>] [-module-path <path>] [-add-modules <modules>]...
|       reset jshell
|  /reload [-restore] [-quiet] [-class-path <path>] [-module-path <path>]...
|       reset and replay relevant history -- current or previous (-restore)
|  /history
|       history of what you have typed
|  /help [<command>|<subject>]
|       get information about jshell
|  /set editor|start|feedback|mode|prompt|truncation|format ...
|       set jshell configuration information
|  /? [<command>|<subject>]
|       get information about jshell
|  /#
|       re-run last snippet
|  /<id>
|       re-run snippet by id
|  /-<n>
|       re-run n-th previous snippet
|
|  For more information type '/help' followed by the name of a
|  command or a subject.
|  For example '/help /list' or '/help intro'.  Subjects:
|  intro
|       an introduction to the jshell tool
|  shortcuts
|       a description of shortcuts
|  context
|       the evaluation context options for /env /reload and /reset

jshell> int a = 10;
a ==> 10

jshell> System.out.println(a);
10

jshell> /exit
|  Goodbye
```