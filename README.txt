生日贺卡网页使用说明

1. 双击 index.html 即可在电脑浏览器里打开。
2. 手机预览：把整个 birthday-card 文件夹传到手机，再打开 index.html；或使用文末的免费发布方式。
3. 修改文字：用记事本打开 index.html，搜索对应句子直接替换。
4. 修改照片吐槽：每张照片下面的 <figcaption>…</figcaption> 就是对应文案。
5. 添加背景音乐：
   - 把你合法拥有的音频放进 assets 文件夹；
   - 用记事本打开 app.js；
   - 将 const MUSIC_FILE = ""; 改为 const MUSIC_FILE = "assets/音频文件名.mp3";
   - 音乐会在点击“打开看看”后低音量播放，并出现开关。

注意：移动、分享或发布时，请保留 index.html、style.css、script.js 和 assets 文件夹的相对位置。
