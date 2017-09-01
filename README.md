# SelfBot Setup

**I highly recommend to not use any self/userbot, this code really is only for refrences/educational.<br />
If you do decide to run it I will __not__ be responsible for any consequences that may have!<br />
Running a self/userbot can result into account deletion.**

### Required Programs

Before you can setup the bot there are 2 programs you need to have installed on your computer to make sure everything runs properly:

- [**Git**](https://git-scm.com/downloads)
- [**Node JS**](https://nodejs.org/en/download/current/)

### Download Project Files

Either download the zip folder or do `git clone https://github.com/kurozeroPB/selfbot.git`.

### Setup Config

There is a folder named `config`. You'll find 3 files and 1 folder:

- `avatars`
- `config.json`
- `games.json`
- `paste.json`

#### `avatars`

If you have avatar rotation on you can add avatars in this folder. Note `.gif` is only possible for Nitro users.

#### `config.json`

This is the main config file. Inside you will see several options, this is what each one means:

- `token` your discord token. (don't know how to get it? `ctrl+shift+i` -> head over to the `Application` tab -> click on `Local Storage` -> at the bottom should be your token, copy the text in the `""`)
- `ownerID` is your discord ID
- `prefix` is the prefix you want to use for the commands
- `rotatePlayingGame`, rotates discord playing status when enabled from the `games.json` file
- `rotatePlayingGameTime`, time interval you want for the rotation in milliseconds
- `rotatePlayingGameInStreamingStatus`, rotate in streaming status when enabled
- `rotateAvatarImage`, rotates discord avatar when enabled from the images in `config/avatars` folder
- `rotateAvatarImageTime`, time interval you want for the rotation in milliseconds in milliseconds
- `defaultStatus`, default discord status to show on your account. Either "online", "idle", "dnd" or "invisible"
- `mentionNotificator` if you want to have your mentions notified
  + `inConsole` as a log to console
  + `inNotificationChannel` as a message sent to the notification channel
  + `logBlockedUsers` if you want users you blocked to be logged or not
- `eventNotificator` if you want to have events like guild creations, or friend requests notified
  + `inConsole` as a log to console
  + `inNotificationChannel` as a message sent to the notification channel
- `notificationChannelID`, if you set `inNotificationChannel` to `true` at least once, the channel ID to make notifications in
- `defaultEmbedColor` the hex color code for the default color for embeds
- `deleteCommandMessages` if command messages and error messages should be deleted after a bit
- `deleteCommandMessagesTime` time the bot waits before deleting the command message in milliseconds

#### `games.json`

Here you can add and remove playing status games. If you set the `rotatePlayingGame` in the `config.json` file to `false`, you don't need to worry about this file.

#### `paste.json`

Copypasta text for the `paste` command, you can add or remove w/e you want.

### - Start the bot -

When you have the required programs installed, have all project files, and have setup config files you can start the bot:

#### Windows/Linux / Mac

Open your console in the directory you have all the files in, then type `npm i` this will download the required files, after it finishes correctly type `node self.js` or `npm start` and the bot should start.
