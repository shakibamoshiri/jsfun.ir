<h1 align="center">jsfun.ir</h1>

<p>The main repository for <a target="_blank" href="http://jsfun.ir">jsfun.ir</a></p>
<p>Anyone can clone / fork and then add more posts to it.</p>
<p>Before doing it you will need <a target="_blank" href="https://github.com/k-five/nodepost">nodepost</a> application to handle dependencies.</p>

<h1 align="center">Instruction</h1>


 1. `git clone htttp://github.com/k-five/nodepost`
 2. `cd nodepost`
 3. again: `git clone https://github.com/k-five/jsfun.ir home`
 4. `mv home/database .`
 5. `./node-dev nodepost`
 6. open `localhost:1400`

This is what we did:
 1. we cloned the main application for managing our blog.
 2. then `cd` to **nodepost**
 3. then cloning the blog we what which here is <a target="_blank" href="http://jsfun.ir">jsfun.ir</a>
 4. **database** placed inside `home/` is required by **nodepost**, so we move it out to our working directory
 5. then running the application which uses the **database** and start listening on port `1400`


