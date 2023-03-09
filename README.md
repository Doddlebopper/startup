#startup Dave's Skip Policy Website


Elevator Pitch:
Dave is my uncle who has an affinity to skipping the person in the lead whenever we play the game Phase 10. He has such an affinity for it, that he has created his own rulebook that contain his various rules for when he plays Phase 10. I am going to create a website that will allow not just Dave, but anybody on the website to press a SKIPPED THE LEADER button that will increment a counter permanently that can be pressed whenever someone has skipped the leader. In addition to this, I will create a score counter for up to 4 players that will keep track of each persons score when the user updates it.

Additional Info:
If you don't believe me, then visit davesskippolicy.com
It's my Uncle's personal website.![CS260 Startup Project](https://user-images.githubusercontent.com/122325330/215030090-06cd3a37-c3fd-49af-abe1-f10797269c37.png)

What I have learned notes:

./deployFiles.sh -k ~/downaloads/production1.pem -h davesskippolicy.net -s simon // creates a new "website" of sorts that puts all of the files from the simon into.

float moves an element to the left or right of its container element and allows inline elements to wrap around it.
gap: value - This property is specified as a value for <'row-gap'> followed optionally by a value for <'column-gap'>. If <'column-gap'> is omitted, it's set to the same value as <'row-gap'>. Used in grids. synonymous with grid-gap: value;
margin: top right bottom left;
top: value - moves the element a distance from the top of its container. takes % as well
bottom: val - moves element up a distance from the bottom of its container, etc
right
left
translateX() - moves an element horizontally on the 2D plane. It takes a distance value as a parameter, which can be specified in pixels (px), ems (em), or other length units, and indicates how far to move the element along the horizontal axis. Negative moves left, positive moves right; if you use a percent it refers to a percent of the element's own width and height; DOES NOT AFFECT STATIC ELEMENTS
translateY() - same as X but vertical
transform: translateX() translateY() - transform property allows you to apply a transformation to the element while keeping its position and layout within the document flow intact. transform allows you to act on static elements
flex: flex-grow flex-basis; flex-grow defines how much the item will grow to fill around it. 1 means it will fill all available space. flex-basis is the value that says the intitial size of the flex item. margin-top: val - sets the margin space on the top margin-botton margin-left margin-right

Class

https is secure, http is not secure.
Layers Application (http), Transport (TCP- slower but more methodical, UDP-faster but more error prone), Internet (IP), Link (Physical connection like wiring)
Web server has services within it.
Multiple ports on a server. Port 443 is a secure http connection. You can have a gateway service on your web server that links to different ports ig.
servers can talk to other servers. service are just programs in the servers

Commands

cd -change directory mdkir make directory touch create files and modify metadata cp copy files mv move and rename files rm delete files or directories curl download files found at specific URLs grep search for fragments of text inside larger bodies of text less cat view file's contents awk tr sed manipulate and transform streams of text cd path/to/directory ommitting the slash means the path is relative to your current directory cd .. move back up one directory ls list the stuff in the directory ls -l list in more detail ls -al list all files in more detail even the hidden ones --help get info on command man get info on command mkdir newDirectory rmdir directory rmdir -rf remove directory and everything in it touch fileName mv current/file/path new/file/path cp current/path new/path * is a wildcard character tldr.sh explains a lot of commands wc counts # of words, lines, chars, or bytes of whatever is inputted

Environments

-my development environment is my computer and my production environment is AWS
Never develop in the production environment
Deployment of app should be done via a CI (continuous integration) process
this checkouts the application code, links it, builds it, tests it, stages it, tests it more, and finally pushes the application to the production environment and notifies

Addresses and IP's

IP addresses are the the addresses of servers. IP addresses are how computers find each other. We don't usually use the string of numbers and so we just use like google.com. Computers we use are clients bc they are not directly connected to the internet. They use an ISP (internet service provider). When info is transfered on the internet it's transferred in packages that are reassembled at arrival. IP addresses also apply to things indirectly connected to the internet. Anywhere two or more parts of the internet intersect, there is a router. Routers direct our packets of info around. When you send something, the info is wrapped in layers of all the IP addresses it passes through (routers have IP addresses). Info can go back to where it came from by looking at the IPs it's wrapped in and retracing its steps.

IP layers:

Application // Transport (TCP) // Internet (IP) // Link // 

To point to another DNS record, you shoud use the following DNS record type - CNAME

You can use this CSS to load fonts from Google - @import url(##) - True

Following output - new Promise(resolve,reject) -> { setTimeout(() -> { console.log('taco');, .then() = shake, = burger fries taco shake noodles

Which is valid JSON? - {"x":3}

Using CSS how would you turn only the BYU text blue? - div.header { color: blue;}

Following is not valid way to include JavaScript in HTML? - <javascript>1+1</javascript>

let a = ['cow', rat, fish]; a.filter(v->v.match(/A|f/i)); console.log(b) = ['rat','fish']

Not a valid javascript function - function f(x) = {}

CSS property padding .. puts space around the content of selected elements

Order of the CSS box model, starting from the outside going in? - margin, border, padding, content

[cow, rat, fish] b = a.reduce(a,v) -> [a,v].join(":") = cow:rat:fish

HTML tag for an unordered list? - <ul>

following code do? - querySelector('P) .addEveentListener() - Adds a mouseover to listener

HTML Create a valid hyperlink? - <a href="https:...">Name</a>

DOM textContent property do? - sets child text for an element

DNS Subdomain - cs260.cs.byu.edu

flex-direction: column-reverse; = <p>Hello</p><p>World</p> = world hello

const f = y -> ++y; console.log(f(3)) = 4

valid JavaScript object? - {n:1}

following console command makes a script executable? - chmod +x deploy.sh

what does <div> do? - creates division element
