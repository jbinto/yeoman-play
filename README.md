# jbinto/yeoman-play

Just playing with [Yeoman](http://yeoman.io/), specifically:

* testing pushing to Github Pages using [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control).
* playing with AngularJS via the [egghead.io](https://egghead.io/) screencasts.

## Installation

```
git clone git@github.com:jbinto/yeoman-play.git
cd yeoman-play
npm install
```

## Running tests

```
grunt test
```

## Previewing and building

```
grunt server
grunt
```

## Deployment to GitHub pages 

Set the Git remote in `Gruntfile.js`, in the `buildcontrol` options section.

Buildcontrol will helpfully prevent deployments to "production" if the source repository hasn't been checked in.

```
grunt buildcontrol
```
