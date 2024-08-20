- NPM vs YARN


- NVM: 
- `sudo npm install -g n`
- NPM: package manager

# NPM 
1. package installation 
2. dependencies management
3. versioning 
4. scripts

- `npm i <package>`: npm receives a tar file into its registry 
- to view tar file on npm registry: `npm view <package>`

- remove package: `npm remove express`

## global vs local packages:
- to find location: `npm root -g`
- node global modules: `/home/ayush10nov/.nvm/versions/node/v21.4.0/lib/node_modules`

- Local Node.js packages are project-specific tools, ensuring dependencies stay organized within one project. On the other hand, Global packages are like system-wide tools accessible across projects, with installations not reflected in project files.

## semantic versioning : 
- MAJOR.MINOR.PATCH // NOT TAKEN SERIOUSLY BY PEOPLE
- `~`: update only patch  ,ex: 4.4.<update>
- `^`: update minor & patch ,ex: 6.<update>.<update>
 

## dependencies : most critical for project.
## dev dependencies: only for development env , not need in production like webpack using the `--save-dev` flag
## peer dependencies : packages your package relies on but expects the consumer to provide like react for react-dom

## NPM scripts 
- Already hardCodded scripts: `npm <script>`
- custom scripts : 
    - define scripts in package.json & run -> `npm run <Name>`

# NPX 
-  Node Package eXecute
-  useful for `running binaries` from packages without the need for global installation.
1. package execution
2. latest version
3. local package execution 

ex; `create-react-app` ; npx first installs , then use & then delete.

## changing global packages location 
- change directory permissions or change the directory location itself
```markdown
2nd method:
- `npm config get prefix`
- in ~ : mkdir globalnodemodules
- npm config set prefix <npm root -g 's output>
```

## NPM cache 
> when something is broken 
- `cd ~/.npm`
- `npm cache clean --force`
- 