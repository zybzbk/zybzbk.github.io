import{_ as t,c as s,a as e,o as l}from"./app-ekpvVriN.js";const a="/assets/%E6%BC%94%E7%A4%BA%E5%9B%BE%E7%89%87-DsbKslov.jpg",i={};function d(c,n){return l(),s("div",null,[...n[0]||(n[0]=[e(`<h1 id="mod-txt的结构" tabindex="-1"><a class="header-anchor" href="#mod-txt的结构"><span>mod.txt的结构</span></a></h1><hr><p>mod.txt 采用类似 <strong>HTML</strong> 的格式进行编写排版，包含开始标签和闭合标签。注释以 <code>//</code> 开头。其基本结构如下（ <code>&lt;mod&gt;</code> 标签内的每个子标签都是为可选的，若省略就使用游戏默认值）： (译者注：这里用HTML并不准确，如果要准确一些应该是XML)</p><div class="language-mod.txt line-numbers-mode" data-highlighter="prismjs" data-ext="mod.txt"><pre><code><span class="line">&lt;mod&gt;</span>
<span class="line">	&lt;name&gt;&lt;/name&gt;</span>
<span class="line">	&lt;author&gt;&lt;/author&gt;</span>
<span class="line">	&lt;show_scenarios&gt;&lt;/show_scenarios&gt;</span>
<span class="line">	&lt;years&gt;&lt;/years&gt;</span>
<span class="line">	&lt;credits&gt;&lt;/credits&gt;</span>
<span class="line">	&lt;text_colours&gt;&lt;/text_colours&gt;</span>
<span class="line">	&lt;nationality&gt;&lt;/nationality&gt;</span>
<span class="line">&lt;/mod&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;name&gt;</code><br> 游戏本身不会用到它，但这可以用来标识你的模组名称。</p><p><code>&lt;author&gt;</code><br> 游戏本身不会用到它，但这可以用来标识你的模组名称。</p><p><code>&lt;show_scenarios&gt;</code><br> 如果你正在运行一个模组，默认情况下不会显示那 8 个剧本（因为你的模组背景可能并非设定在二战时期）。如果你想让这些剧本显示出来，请添加：<br></p><div class="language-mod.txt line-numbers-mode" data-highlighter="prismjs" data-ext="mod.txt"><pre><code><span class="line">	&lt;show_scenarios&gt;yes&lt;/show_scenarios&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(译者注，这里的剧本指的是如图红圈内容)<br></p><p><img src="`+a+`" alt="演示图片"></p><p><code>&lt;allow_vehicles&gt;</code><br><code>&lt;allow_infantry&gt;</code><br><code>&lt;allow_at_guns&gt;</code><br><code>&lt;allow_artillery&gt;</code><br> 如果你不想在模组中包含某一类小队，只需将对应的条目设置为 &#39;no&#39; 即可。</p><div class="language-mod.txt line-numbers-mode" data-highlighter="prismjs" data-ext="mod.txt"><pre><code><span class="line">	&lt;allow_vehicles&gt;no&lt;/allow_vehicles&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>&lt;minimum_commonness&gt;</code> <br> 如果你不希望敌方 AI 选择稀有单位，请将该标签的值设置成允许ai选择单位的最低常见度。</p><div class="language-mod.txt line-numbers-mode" data-highlighter="prismjs" data-ext="mod.txt"><pre><code><span class="line">	&lt;minimum_commonness&gt;5&lt;/minimum_commonness&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>&lt;minimum_commonness_to_upgrade&gt;</code> <br> 如果 AI 在初始购买后还有剩余资金，它可以将部分单位升级为更高级的单位。使用此设置可以防止它升级为那些不太常见的单位类型。</p><div class="language-mod.txt line-numbers-mode" data-highlighter="prismjs" data-ext="mod.txt"><pre><code><span class="line">	&lt;minimum_commonness_to_upgrade&gt;50&lt;/minimum_commonness_to_upgrade&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>&lt;choose_unique_rifle_squad&gt;</code> <br> 默认情况下，AI 会选择单一类型的步枪小队并仅使用这一种。将此设置为“no”，它就会随机选择小队类型。</p><p><code>&lt;years&gt;</code> <br> 用于指示游戏向玩家展示哪些年份选项。最多只会显示八个选项（目前版本显示上限由屏幕大小决定）。例如：</p><div class="language-mod.txt line-numbers-mode" data-highlighter="prismjs" data-ext="mod.txt"><pre><code><span class="line">	&lt;years&gt;</span>
<span class="line">		&lt;start&gt;1950&lt;/start&gt; //开始年份</span>
<span class="line">		&lt;end&gt;1990&lt;/end&gt; //结束年份</span>
<span class="line">		&lt;increment&gt;10&lt;/increment&gt; //每个年份的间隔（年）</span>
<span class="line">	&lt;/years&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;credits&gt;</code> <br> 用于告诉游戏向玩家展示的四个积分选项。例如：</p><div class="language-mod.txt line-numbers-mode" data-highlighter="prismjs" data-ext="mod.txt"><pre><code><span class="line">	&lt;credits&gt;</span>
<span class="line">		&lt;attack1&gt;100&lt;/attack1&gt; //除了防守模式，点数都用attack的</span>
<span class="line">		&lt;attack2&gt;200&lt;/attack2&gt;</span>
<span class="line">		&lt;attack3&gt;300&lt;/attack3&gt;</span>
<span class="line">		&lt;attack4&gt;400&lt;/attack4&gt;</span>
<span class="line">		&lt;defend1&gt;80&lt;/defend1&gt; //防守模式的点数</span>
<span class="line">		&lt;defend2&gt;160&lt;/defend2&gt;</span>
<span class="line">		&lt;defend3&gt;240&lt;/defend3&gt;</span>
<span class="line">		&lt;defend4&gt;320&lt;/defend4&gt;</span>
<span class="line">	&lt;/credits&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;text_colours&gt;</code> <br> 用于告诉游戏使用什么文本颜色。例如：</p><div class="language-mod.txt line-numbers-mode" data-highlighter="prismjs" data-ext="mod.txt"><pre><code><span class="line">	&lt;text_colours&gt;</span>
<span class="line">		&lt;map_description&gt;C6BD94&lt;/map_description&gt;</span>
<span class="line">		&lt;custom_heading&gt;C6BD94&lt;/custom_heading&gt;</span>
<span class="line">		&lt;custom_option&gt;FFFFFF&lt;/custom_option&gt;</span>
<span class="line">		&lt;custom_unit_description&gt;FFFFFF&lt;/custom_unit_description&gt;</span>
<span class="line">		&lt;game&gt;C6BD94&lt;/game&gt;</span>
<span class="line">		&lt;friend&gt;58A5F3&lt;/friend&gt;</span>
<span class="line">		&lt;enemy&gt;FD8177&lt;/enemy&gt;</span>
<span class="line">	&lt;/text_colours&gt; //这里我没有使用过就不具体介绍了，感兴趣的朋友可以自己试试</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;nationality&gt;</code> <br> 用于告诉游戏将显示哪些国籍选项。为您希望玩家能够选择的每个选项使用一个<code>&lt;nationality&gt;&lt;/nationality&gt;</code>标签。如果您省略了某个内置国籍的任何信息，游戏将使用您在 <code>&lt;name&gt;&lt;/name&gt;</code>中所选国籍的默认数据。</p><div class="language-mod.txt line-numbers-mode" data-highlighter="prismjs" data-ext="mod.txt"><pre><code><span class="line">	&lt;nationality&gt;</span>
<span class="line">		&lt;name&gt;American WW2&lt;/name&gt;</span>
<span class="line">		&lt;surnames&gt;surnames_american.txt&lt;/surnames&gt;</span>
<span class="line"></span>
<span class="line">		&lt;flags&gt;</span>
<span class="line">			&lt;static&gt;flag_USA_WW2.png&lt;/static&gt;</span>
<span class="line">			&lt;animated&gt;flag_animated_USA.png&lt;/animated&gt;</span>
<span class="line">		&lt;/flags&gt;</span>
<span class="line"></span>
<span class="line">		&lt;equipment&gt;equipment_american_WW2.txt&lt;/equipment&gt;</span>
<span class="line"></span>
<span class="line">		&lt;voice&gt;US&lt;/voice&gt;</span>
<span class="line"></span>
<span class="line">		&lt;ranks&gt;</span>
<span class="line">			&lt;1&gt;Pvt&lt;/1&gt;</span>
<span class="line">			&lt;2&gt;PFC&lt;/2&gt;</span>
<span class="line">			&lt;3&gt;Cpl&lt;/3&gt;</span>
<span class="line">			&lt;4&gt;Sgt&lt;/4&gt;</span>
<span class="line">			&lt;5&gt;2Lt&lt;/5&gt;</span>
<span class="line">			&lt;6&gt;1Lt&lt;/6&gt;</span>
<span class="line">			&lt;7&gt;Cpt&lt;/7&gt;</span>
<span class="line">		&lt;/ranks&gt;</span>
<span class="line"></span>
<span class="line">		&lt;default_images&gt;</span>
<span class="line">			&lt;tank_crew&gt;uniform_game_american_tank_crew.png&lt;/tank_crew&gt;</span>
<span class="line">			&lt;infantry&gt;uniform_game_american.png&lt;/infantry&gt;</span>
<span class="line">			&lt;tank_crew_profile&gt;uniform_profile_american_tank_crew.png&lt;/tank_crew_profile&gt;</span>
<span class="line">			&lt;infantry_profile&gt;uniform_profile_american.png&lt;/infantry_profile&gt;</span>
<span class="line">			&lt;ranks&gt;uniform_ranks_american.png&lt;/ranks&gt;</span>
<span class="line">		&lt;/default_images&gt;</span>
<span class="line"></span>
<span class="line">	&lt;/nationality&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;nationality&gt;</code> <code>&lt;flags&gt;</code> <br> 您可以为静态旗帜（用于自定义游戏界面）或动态旗帜（用于游戏内）使用任何内置旗帜。如果您指定了自定义模组（mod）旗帜，请确保将您的 PNG 格式旗帜图像放置在 Mod/Chooser/Custom Game/Flags（用于静态旗帜）和 Mod/Images/Game/Flags（用于动态旗帜）文件夹中。</p><p><code>&lt;nationality&gt;</code> <code>&lt;equipment&gt;</code> <br> 您可以指定多个 <code>&lt;equipment&gt;</code> 文件，例如，您可以指定内置的 <code>equipment_american_WW2.txt</code>，然后为您额外添加的模组小队指定一个附加的装备文件。</p><p><code>&lt;nationality&gt;</code> <code>&lt;voice&gt;</code> <br> 内置语音包括：US（美式英语）、UK（英式英语）、FR（法语）、RU（俄语）、DE（德语）、IT（意大利语）、JP（日语）、AR（阿拉伯语）、CN（中文）、HU（匈牙利语）、IL（希伯来语）、PL（波兰语）、RO（罗马尼亚语）、UA（乌克兰语）。游戏会使用这两个字母的代码在 Sounds/Voices 文件夹中查找正确的语音文件，并找到对应的 voice_XX_ 文件进行播放。如果您创建自己的语言，请选择一个双字母缩写，并将您的 .ogg 音频文件放置在 /Mod/Sounds/Voices/XX/voice_XX_xxxxxx.ogg 等路径下……</p>`,28)])])}const p=t(i,[["render",d]]),o=JSON.parse('{"path":"/modtxt%E6%95%99%E7%A8%8B.html","title":"mod.txt介绍","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"mod.txt介绍","description":"介绍mod.txt 文件的结构"},"headers":[],"git":{},"filePathRelative":"modtxt教程.md"}');export{p as comp,o as data};
