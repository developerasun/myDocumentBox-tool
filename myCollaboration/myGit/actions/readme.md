# Learning Github Actions

Took below courses and summarized.

- [GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker (ENG)](https://youtu.be/R8_veQiYBjI)
- [GitHub Actions for development cycle automation (KOR)](https://youtu.be/MhGpFunlmMQ)


## Basic Concepts and CI/CD Pipeline with Docker
<p>
Github Actions is a platform helping developer to automate workflows. Ususally workflow means a types of work that is time-consuming or tedius. For example, CI/CD is one of the supported functions(workflows) in Github Actions.
</p>

- CI : continuous integration 
- CD : continuous development 

### Understanding workflows
Let's take a look at how a project is created and maintained in Github.

1. New repository is created
2. New contributors join
3. The contributors find issues and create pull requests
4. The issues and pull requests are reviewed
5. Merged to master branch 

<p>==== CI/CD ==== Comes in</p>

6. Write test codes towards the merged codes
7. Build the project and set the details(release notes, version number, etc)
8. Deploy the project

<img src="../reference/github-workflow.png" width=840 height=470 alt="github workflow screenshot" />

Github Actions is created to automate some of the parts in above process as much as possible so that developer can focus on more important task. Then how the platform is able to automate such process? 

### How Github Actions automation is done
When somehting happens in the repository, whether by you or the third party, this unit is called event. 

- Pull request created/merged
- Contributors joined
- Issue created/closed

<p>And Github Actions 1) listens to the events 2) creates/triggers a corresponding execution. The most common workflow to automate in repository is CI/CD, which is demonstrated by below screenshot. 
</p>

<img src="../reference/ci-cd-process.png" width=697 height=296 alt="github workflow screenshot" />

<p>
Choosing Github Actions over other CI/CD tools has an advantage that it is easier to set up. You can just adopt the same tool(Github) for workflow automation rather than having to learn/install all the different platforms and tool combination. 
</p>

### Example with repository
1. Go to your github repository and click action tab. 
2. Choose workflow template based on your needs
3. The template will automatically create related configs in yaml format. 

<details>
    <summary>What is yaml?</summary>
YAML is a superset of JSON with indentation. It is more human-friendly and easier to understand than JSON thus commonly used to write configuration files.

</details>

4. The config yaml will be executed and managed in Github. Each job in a workflow runs in a fresh virtual environment.

```yaml
name: CI

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

  workflow_dispatch:

jobs:

  build:

    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v2

      - name: Run a one-line script
        run: echo Hello, world!

      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.

```

5. Check action status in your repository action tab like below. 

<img src="../reference/github-workflow.png" alt="github action result screenshot" width=530 height=560 />

## GitHub Actions for development cycle automation
Topics covered by this tutorial are as follows : 

- Selecting OS/Node js version for github actions
- Test automation
- Approach to build artifact

- Node version changes and maintenance
<img src="../reference/node-version.png" alt="github action result screenshot" width=527 height=272 />

- matrix build(build several versions at the same time)
<img src="../reference/matrix-build.png" alt="github action result screenshot" width=412 height=288 />

```yml
jobs : 
    build : # job 1 : build
      runs-on : ubuntu-latest
      strategy : 
          maxtrix : 
              os : [ubuntu-latest, window-2020]
              node-version : [12.x, 14.x] # two nodes will be built
      steps : 
        - uses : actions/checkout@v2
        - name : npm install and build
          run : | 
              npm install
              npm run build
    test : # job 2 : test 
      runs-on : ubuntu-latest
      strategy : 
          maxtrix : 
              os : [ubuntu-latest, window-2020]
              node-version : [12.x, 14.x]
      steps : 
        - uses : actions/checkout@v2
        - name : npm install and test
          run : | 
              npm install
              npm test

```
