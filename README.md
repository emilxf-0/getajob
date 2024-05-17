# Getajob

Getajob is a super bare bones game dev portfolio meant to showcase your work in a more attractive way than just posting a link to your Github account. It's built with Tailwindcss, Jekyll and Alpine.js and is hosted on github pages, making it fairly lightweight and easy to use. Web development can be pretty opaque and I've spent more time than I would've liked wrapping my head around the toolchain and trying to understand how things work. Hopefully I can make it clearer to someone else.

### How it works
TL;DR add the relevant markdown files under the `_projects` folder and update the projects.yml file in the `_data` folder and you're good to go. 

Aight, so the beauty of all this is that Jekyll utilizes Liquid, which is a templating language that saves us from copy pasting hella lot of code and helps us push content to where we want it to be. It looks a bit daunting at first but once you internalize it it's smooth sailing. What it means is that instead of faffing around with html every time you want to add a project you'll just add a markdown file and it's done. 

### What's included
I've added the necessary setup for tailwind, some basic templating for a start page and a CV.

### Basic Setup
1. Click "Use this template" in the top right corner here on Github.
2. Name the repo yourusername.github.io to make set up github pages (it has to be public).
3. Copy the repo to your computer (I strongly recommend having something like a `C:\dev` folder where you put all your repo's. It'll _massively_ help with organizing your stuff and navigating through the console). 
   
### Install dependencies
1. Download and install [NVM Windows](https://github.com/coreybutler/nvm-windows/releases)

2. After NVM is installed open command prompt and run.

   ```nvm install node```

3. Navigate to your project folder by using `cd path/to/your/folder`

4. If you don't have Ruby installed [download it here](https://rubyinstaller.org/downloads/).

5. Install Jekyll and Bundler.

   ```gem install jekyll bundler```

6.  Install tailwindcss

   ```
   npm install -D tailwindcss 
   npx tailwindcss init
   ```

6. Install tailwindcss typography

   ```npm install -D @tailwindcss/typography```

7. Install rimraf

   ```npm i rimraf```

### Build the site
1. To build and run your site you just open a command prompt and type

   ```npm run serve```
