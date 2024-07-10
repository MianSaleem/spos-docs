---
outline: [2, 3]
---

# Installation

### Requirements:

**PHP8.2+ (PHP8.3 default)**

**MySQL 5.7.10+ (MySQL 8 recommended)**

## Installation Guide

Please follow the installation steps below

1. Please upload all the files & folders to your server.
2. Please set the root path of domain/subdomain to `public` folder in your uploaded files and for subfolder, you need to redirect all traffic to `public` folder.

   ::: danger Security Check
   Please don’t allow web access to the folder in which you have uploaded files. Only `public` folder should be allowed in web access.
   :::

3. You can access the installer by adding `/install` at the end of your domain URL in browser.

   > `https://yourdomain.com/install`

   > `https://yourdomain.com/subfolder/install`

   > `https://subdomain.yourdomain.com/install`

   ::: warning Download doesn't have install folder
   `install` is not a folder name but a route.
   :::

4. Please prepare these details (mentioned at installation step 1)
5. If installer give any `server error`, please check (step 3).
   You can check server error logs and the Laravel logs in the `storage/logs/` folder.
   If you are not sure, you can check with your server admin.
6. Please provide the details of your purchase, database, mail and user account (step 3).

   > For purchase verification, the username is Envato username that you use to login to codecanyon.net and themeforest.net while the purchase code is in your license file, please download the license to get purchase code.

   > You can create database & user at your server, if you are not sure please check with server admin.

7. Finalize the installation (final step 4).

## Update Guide

### :x: V4 to the latest

> **_You can't update v4 to v5 due to different database structure._**

V5 is not completable with version 4, so please install version 5 and import the products, customers, and update settings to use the new version.

### :white_check_mark: V5 to the latest

Please backup `
.env` file and then upload the latest files & folders to replace the old ones then run the migration command as following

```sh
# cd /path/to/upload/folder

php artisan migrate --force
```

## FAQs

### Can't access /install

#### Why I can't access the `/install` route in browser?

Please make sure that

1. You have uploaded the file to correct folder.
2. The domain/subdomain root path has been set correctly to `public` folder.
3. If you are installing in subfolder then make sure you are forwarding the traffic to `public` folder.
4. Check that `mod_rewrite` is enabled and configured to use the `.htaccess` file from site folder.
5. Make sure that you server meets the php and mysql requirements mention above.

### White page at /install

#### Why I see nothing on `/install` route but blank White page?

Please check your server error logs for details. You can check Laravel logs in the `storage/logs/` folder too. Once you have the error details, please ask question at support portal <a href="https://tecdiary.net/support" target="_blank">https://tecdiary.net/support</a>

## Support

Each purchase comes with free six months support. If you need assistance, please validate your purchase code at support portal <a href="https://tecdiary.net/support" target="_blank">https://tecdiary.net/support</a> and ask question there.
