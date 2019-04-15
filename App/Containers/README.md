### Containers Folder
A container is what they call a "Smart Component" in Redux.  It is a component
which knows about Redux.  They are usually used as "Screens".
container在Redux中被称为“智能组件”。它是一个连接Redux的组件。它们通常被用作“屏幕”。

Also located in here are 2 special containers: `App.js` and `RootContainer.js`.
这里还有两个特殊的容器`App.js` 和 `RootContainer.js`.

`App.js` is first component loaded after `index.ios.js` or `index.android.js`.  The purpose of this file is to setup Redux or any other non-visual "global" modules.  Having Redux setup here helps with the hot-reloading process in React Native during development as it won't try to reload your sagas and reducers should your colors change (for example).
`App.js` 是加载 `index.ios.js` 或 `index.android.js`后第一个加载的非可视化组件.这个文件的目的是设置Redux或任何其他非可视的“全局”模块。在这里设置Redux有助于在开发过程中使用React Native中的热加载过程，因为它不会尝试在颜色发生变化时重新加载您的sagas和reduce(例如)。

`RootContainer.js` 是应用程序中的第一个可视化组件。它是所有其他屏幕和组件的祖先。

You'll probably find you'll have great mileage in Ignite apps without even touching these 2 files.  They, of course, belong to you, so when you're ready to add something non-visual like Firebase or something visual like an overlay, you have spots to place these additions.
你可能会发现，即使不接触这两个文件，你在Ignite应用程序中也会有很大的优势。它们当然属于你，当你准备添加一些非可视的东西比如Firebase或者一些类似于叠加的视觉效果。你有位置来放置这些添加物