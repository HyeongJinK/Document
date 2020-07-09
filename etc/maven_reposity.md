Setting up Multiple Repositories
There are two different ways that you can specify the use of multiple repositories. The first way is to specify in a POM which repositories you want to use:

<project>
...
  <repositories>
    <repository>
      <id>my-repo1</id>
      <name>your custom repo</name>
      <url>http://jarsm2.dyndns.dk</url>
    </repository>
    <repository>
      <id>my-repo2</id>
      <name>your custom repo</name>
      <url>http://jarsm2.dyndns.dk</url>
    </repository>
  </repositories>
...
</project>
NOTE: You will also get the standard set of repositories as defined in the Super POM.

The other way you can specify the use of multiple repositories by creating a profile in your ${user.home}/.m2/settings.xml file like the following:

<settings>
 ...
 <profiles>
   ...
   <profile>
     <id>myprofile</id>
     <repositories>
       <repository>
         <id>my-repo2</id>
         <name>your custom repo</name>
         <url>http://jarsm2.dyndns.dk</url>
       </repository>
     </repositories>
   </profile>
   ...
 </profiles>
 
 <activeProfiles>
   <activeProfile>myprofile</activeProfile>
 </activeProfiles>
 ...
</settings>
If you specify repositories in profiles you must remember to activate that particular profile! As you can see above we do this by registering a profile to be active in the activeProfiles element.

You could also activate this profile on the command like by executing the following command:

mvn -Pmyprofile ...
In fact the -P option will take a CSV list of profiles to activate if you wish to activate multiple profiles simultaneously.

Note: The settings descriptor documentation can be found on the Maven Local Settings Model Website.







<meta name="google-site-verification" content="Zvrwdo1rEDYpRuYKPBQLQvxh-Sua00xQ73KaLPo0RtA" />