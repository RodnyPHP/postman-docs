---
title: "Migrating to the current version of Postman"
order: 140.1
page_id: "migrating_to_v8"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"

---
This section describes the steps/flow to migrate to Postman v8.

## Migrating to the latest version of Postman

Postman v8 gives you a consistent, better API development experience. It has universal search across all of Postman, including the Public and Private API Networks, plus you can work on public workspaces directly through the desktop app. This means that the Postman desktop app and Postman on the [web](https://community.postman.com/t/whats-new-in-postman-for-the-web/18203) are now equally empowering—which one you use is a matter of preference for your workflows.

## Contents

* [Upgrading from v7 to v8](#upgrading-from-v7-to-v8)
    * [Upgrading to v8 as an individual](#upgrading-to-v8-as-an-individual)
    * [Upgrading to v8 as a team](#upgrading-to-v8-as-a-team)
* [Upgrading your team from v6 or earlier](#upgrading-your-team-from-v6-or-earlier)
    * [Upgrading from v6/v5 as a team](#upgrading-from-v56-as-an-individual)
    * [Upgrading from v6/v5 as an individual](#upgrading-from-v56-as-a-team)
* [Installing earlier versions of Postman](#installing-earlier-versions-of-Postman)
    * [Downloading Postman v7 app](#downloading-postman-v7-app)
    * [Downloading Postman v6 app](#downloading-postman-v6-app)

### Upgrading from v7 to v8

### Upgrading to v8 as an individual

Non-team users can move from Postman v7 to v8 by updating the app via **Settings** > **Update** > **Check for Updates**, without worrying about the steps described in this section.

### Upgrading to v8 as a team

If you are a team user on v7, there is no migration required while you are moving to v8. If you are in a team and download Postman v8 when the entire team is on an older version (v7 or below), you will not be able to use Postman v8. Postman displays a message saying you can’t access features on this version of Postman until the team migrates to Postman v8. Syncing and collaboration will not be affected for users who are on v7 or above.

If you are in a team on Postman v8 and would like to downgrade to Postman v7 to continue working with a team that has not upgraded yet, you can [download the latest v7 app](#downloading-postman-v7-app).

## Upgrading your team from v6 or earlier

Migration is only required if users are on v6 or below. This section describes the following topics:

* [Why migrate?](#why-migrate)
* [How to migrate](#how-to-migrate)

### Why migrate?

If you are a team user on v6 or below, you must migrate to Postman v8 to leverage access to public workspace and [Postman’s v8 features](https://blog.postman.com/introducing-postman-desktop-app/). If you are a team user on v7, there is no migration required while you are moving to v8. If you stay back on the older version of Postman, you will not be able to:

* Use role-based permissions which come with a fine-grained access management of some of Postman’s prominent features.

* Access new features and updates because new feature development will be based on [Postman v8](https://www.postman.com/downloads/release-notes/).

**Note:** Once your team migrates to Postman v7 (or above), the native apps 5.x and 6.x versions and Chrome app 5.x versions will stop syncing and all [collaboration features](https://learning.postman.com/docs/collaborating-in-postman/collaboration-intro) will stop working and all members of the team need to update their apps to Postman v7 (or above) to continue collaborating.

### How to migrate?

This section illustrates the possible user flows and guides you through the migration process. To use this feature, the entire team must be on Postman v7 or above.

**Note:** The migration decision is restricted to the team admin. If you are a Postman team member and are not on Postman v8, please contact your admin to migrate to Postman v8.

### Upgrading from v6/v5 as a team

If you are an admin, you can go to the [Postman dashboard](https://go.postman.co/settings/team/roles) and migrate to Postman v8.

[![migration to v7](https://assets.postman.com/postman-docs/Migrate2.png)](https://assets.postman.com/postman-docs/Migrate2.png)

Click **Migrate my team to v8** and Postman takes care of the next steps for you and your team.

Once your team has migrated to Postman v8, all users in the team would be notified, via email and banners within the app, that they need to update their app to Postman v8.

### Upgrading from v6/v5 as an individual

Non-team users can move from Postman v6 or below to v8 by updating the app via **Settings** > **Update** > **Check for Updates**, without worrying about the steps described in this section.

## Installing earlier versions of Postman

If you happen to be on Postman v8 or below and would like to downgrade to Postman v7 or below to continue working with a team that has not migrated yet, please download the earlier versions of Postman app from the links below.

### Downloading Postman v7 app

Please use the following links to download the latest Postman v7 version for your platform.

* [Download Postman v7 for macOS 64-bit](https://dl.pstmn.io/download/latest/osx)
* [Download Postman v7 for Windows 64-bit](https://dl.pstmn.io/download/latest/win64)
* [Download Postman v7 for Windows 32-bit](https://dl.pstmn.io/download/latest/win32)
* [Download Postman v7 for Linux 64-bit](https://dl.pstmn.io/download/latest/linux64)
* [Download Postman v7 for Linux 32-bit](https://dl.pstmn.io/download/latest/linux32)

**Note:** If you are using Postman for Linux, and had installed the app via 'Ubuntu Software Center' or 'Snap Store', please use the following commands to switch to Postman v7.

```
sudo snap switch --channel=v7/stable postman
sudo snap refresh postman
```

### Downloading Postman v6 app

Please use the following links to download the latest Postman v6 version for your platform.

* [Download Postman v6 for macOS 64-bit](https://go.pstmn.io/dl-macos64-v6-latest)
* [Download Postman v6 for Windows 64-bit](https://go.pstmn.io/dl-win64-v6-latest)
* [Download Postman v6 for Windows 32-bit](https://go.pstmn.io/dl-win32-v6-latest)
* [Download Postman v6 for Linux 64-bit](https://go.pstmn.io/dl-linux64-v6-latest)
* [Download Postman v6 for Linux 32-bit](https://go.pstmn.io/dl-linux32-v6-latest)

**Note:** If you are using Postman for Linux, and had installed the app via 'Ubuntu Software Center' or 'Snap Store', please use the following commands to switch to Postman v6.

```
sudo snap switch --channel=v6/stable postman
sudo snap refresh postman
```

You can update your Postman v6 app to Postman v7, via **Settings** > **Update** > **Check for Updates**. Postman v7 would be available via auto-updates to all team users after the admin has successfully migrated the team.

**Note:** If you are using Postman for Linux, and had installed the app via 'Ubuntu Software Center' or 'Snap Store', you will not be able to update the app via the steps explained above. Please use the following commands to update your app via the terminal:

```
sudo snap switch --channel=latest/stable postman
sudo snap refresh postman
```