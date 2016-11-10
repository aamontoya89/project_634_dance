# our experience working on interactive programming for dance
by yuli cai and aarón montoya-moraga

##origins

we took a class on our first year called choreographic interventions, taught
by mimi yin. it was very cool, we had classes at the tisch dance department
on second avenue, and it was half itp students and half grad students of dance.

for us as itp people, it was a good introduction to notions of choreography and space and movement, while for the dancers they had a crash course on programming on processing, variables, loops, ifs. in each session we would team up and do exercises on both fields and collaborate and have fun.

## puppet project

for our final project for that class, we teamed with choreographer/dancer donald c. shorter jr, to create an interactive audiovisual experience. we worked with processing running on windows machines, in order to use the skeleton tracking data from the kinect 2. we used the oscp5 library to transmit to three different macbooks on stage, two for visuals and one for manipulating audio in realtime.

here are some pics, video and repo:

![puppet01](https://github.com/aamontoya89/project_634_dance/raw/gh-pages/pics/puppet1.jpg "puppet 01")

![puppet02](https://github.com/aamontoya89/project_634_dance/raw/gh-pages/pics/puppet1.jpg "puppet 02")

![puppet03](https://github.com/aamontoya89/project_634_dance/raw/gh-pages/pics/puppet1.jpg "puppet 03")

here you can find the repo:
[https://github.com/aamontoya89/project_puppet](https://github.com/aamontoya89/project_puppet)

## 6:34 project

after this experience, which we really loved, we continued working this semester with donald. he did a piece called 6:34 some years ago, where he used minimal lighting and he wanted to do a new iteration using technology and this time with no stage lights, but with projectors.

for this time, we replaced the use of processing with javascript, for this, we used kinectron to stream data and video from two remote kinects onstage, and we did the visuals with three.js and plain javascript on a browser. we tried to use the matrox, but for our particular setup it wasn't feasible, so we switched to use syphoner, to stream the content from the browser into madmapper to map the visuals into the actual stage.

for this piece, we did a weekly session on a studio at the tisch dance dept, where we would share our weekly progress regarding visuals and the technology in order to accomplish our requirements. we went through a lot of different workflows before settling down in what we actually used. on the final stage, it was very useful to be able to actually use the jack crystal theater where the performance took place, to review short comings like cabling, power, physical setup, materials, etc.

the piece was premiered on november 3rd and 5th and everything worked, which is great, right?

![634_00](https://github.com/aamontoya89/project_634_dance/raw/gh-pages/pics/634_00.jpg "634 00")

![634_01](https://github.com/aamontoya89/project_634_dance/raw/gh-pages/pics/634_01.jpg "634 01")

![634_02](https://github.com/aamontoya89/project_634_dance/raw/gh-pages/pics/634_02.jpg "634 02")

here you can find the repo:
[https://github.com/aamontoya89/project_634_dance](https://github.com/aamontoya89/project_634_dance)

shoutouts to
* donald c. shorter jr for being awesome
* mimi yin for helping us out and giving us always guidance and support
* lisa jamhoury and shawn van every for developing kinectron
* kevin, marlon, rob and the whole e.r. for allowing us to borrow so much stuff
* to github for taking care of our code

for comments and questions, contact us via
~~ caiyuli.com & aaronmontoya.cl ~~
