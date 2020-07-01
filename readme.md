### Access Locally

Pulldown a local copy of this Github repository created for you.

```
$ https://github.com/Tavisca-mTandon/OrxeComponents.git
$ cd OrxeComponents
```

Use HTTPs or add ssh to do so. Using ssh is recommended.

### Set correct credentials

Step 2 would be to set correct registry address and login to NPM via console. This is required for our privacy and security.

```
$ npm config set registry  "https://packages.common.cnxloyalty.com/repository/npm-group/"
$ npm config get registry //should print - https://packages.common.cnxloyalty.com/repository/npm-group/
$ npm logout
$ npm login
```

#### Enter following details when asked -

```
Username: bot-npm
Password: <Get password from registry admin>
Email: <Email Id>
```

### Install and Start

```
$ lerna bootstrap --hoist
$ lerna run start --scope <component-name>
```

The start command should open a tab in your browser at http://localhost:3000/

#### Enjoy
