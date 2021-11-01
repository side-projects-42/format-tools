[Internet Archive Blogs](https://blog.archive.org/ "Internet Archive Blogs")
============================================================================

A blog from the team at archive.org
-----------------------------------

[<img src="https://blog.archive.org/wp-content/uploads/2021/07/blog-header-02-lines-1.png" alt="Internet Archive Blogs" class="header-image" width="4108" height="864" />](https://anniversary.archive.org "Celebrate our 25th anniversary with us.")

Menu

<a href="#content" class="assistive-text" title="Skip to content">Skip to content</a>

-   <span id="menu-item-7707">[Blog](https://blog.archive.org)</span>
-   <span id="menu-item-3417">[Announcements](https://blog.archive.org/category/announcements/)</span>
-   <span id="menu-item-7359">[25th Anniversary](https://anniversary.archive.org)</span>
-   <span id="menu-item-3422">[archive.org](https://archive.org)</span>
-   <span id="menu-item-3421">[About](https://blog.archive.org/about/)</span>
-   <span id="menu-item-15173">[Events](https://blog.archive.org/category/event/)</span>
-   <span id="menu-item-8100">[Developers](https://blog.archive.org/developers/)</span>
-   <span id="menu-item-15172">[Donate](http://archive.org/donate)</span>

Category Archives: Technical
============================

[Thank you for helping us increase our bandwidth](https://blog.archive.org/2020/05/11/thank-you-for-helping-us-increase-our-bandwidth/)
=======================================================================================================================================

Posted on [May 11, 2020](https://blog.archive.org/2020/05/11/thank-you-for-helping-us-increase-our-bandwidth/ "9:16 pm")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/brewster/" class="url fn n" title="View all posts by Brewster Kahle">Brewster Kahle</a></span></span>

Last week the Internet Archive upped our bandwidth capacity 30%, based on increased usage and increased financial support.  Thank you.

![](https://lh3.googleusercontent.com/-WLoG-mkwABflbV1qwv8L2ElRkkfoSiY2ptgxwZE3fNvQ1Tj3Fo1Ox7W5JvDLMeGyb4V6KsrRXELY_qVbEZqI2xopig-2m9aYbGbzmM-vsUrmrbRdJfrB8gzCUDlivrLCSGAHd1U)

This is our outbound bandwidth graph that has several stories to tell…

A year ago, usage was 30Gbits/sec. At the beginning of this year, we were at 40Gbits/sec, and we were handling it.  That is [13 Petabytes of downloads per month](https://www.wolframalpha.com/input/?i=40gigabits%2Fsec+in+Petabytes%2Fmonth).  This has served millions of users to materials in the wayback machine, those listening 78 RPMs, those browsing digitized books, streaming from the TV archive, etc.  We were about the 250th most popular website according to Alexa Internet.

Then Covid-19 hit and demand rocketed to 50Gbits/sec and overran our network infrastructure’s ability to handle it.  So much so, our network statistics probes had difficulty collecting data (hence the white spots in the graphs).   

We bought a second router with new line cards, and got it installed and running (and none of this is easy during a pandemic), and increased our capacity from 47Gbits/sec peak to 62Gbits/sec peak.   And we are handling it better, but it is still consumed.

Alexa Internet now says we are about the [160th most popular website](https://www.alexa.com/siteinfo/archive.org).

So now we are looking at the next steps up, which will take more equipment and is more wizardry, but we are working on it.

Thank you again for the support, and if you would like to donate more, please know it is going to build collections to serve millions.  <https://archive.org/donate>

![](https://lh3.googleusercontent.com/eadd8NRTBxW7SWmgFlZ5rg38lyfJnuA71AFWOsGJFlsRFkf-3gD7rR421n1SjfMZy-U2_R9x188aNvbeFPQx6DQv-ZQGn5uXFNd569eLejW8GtF-YMIcn_rs2D7AUCDLbfCRKvFT)

Posted in [Announcements](https://blog.archive.org/category/announcements/), [News](https://blog.archive.org/category/news/), [Technical](https://blog.archive.org/category/technical/) | <span class="comments-link">[29 Replies](https://blog.archive.org/2020/05/11/thank-you-for-helping-us-increase-our-bandwidth/#comments)</span>

[Farewell to IE11](https://blog.archive.org/2020/05/01/farewell-to-ie11/)
=========================================================================

Posted on [May 1, 2020](https://blog.archive.org/2020/05/01/farewell-to-ie11/ "11:27 pm")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/brenton/" class="url fn n" title="View all posts by brenton">brenton</a></span></span>

<figure><img src="https://blog.archive.org/wp-content/uploads/2020/05/rose-red-rose-flower-romance-romantic-love-blossom-bloom-flowers.jpg" class="wp-image-20511" sizes="(max-width: 880px) 100vw, 880px" srcset="https://blog.archive.org/wp-content/uploads/2020/05/rose-red-rose-flower-romance-romantic-love-blossom-bloom-flowers.jpg 880w, https://blog.archive.org/wp-content/uploads/2020/05/rose-red-rose-flower-romance-romantic-love-blossom-bloom-flowers-300x200.jpg 300w, https://blog.archive.org/wp-content/uploads/2020/05/rose-red-rose-flower-romance-romantic-love-blossom-bloom-flowers-768x511.jpg 768w, https://blog.archive.org/wp-content/uploads/2020/05/rose-red-rose-flower-romance-romantic-love-blossom-bloom-flowers-624x416.jpg 624w" width="880" height="586" /></figure>At the end of the movie “Titanic,” from her makeshift raft Rose Calvert promises Jack Dawson, “I will never let go,” but then, well, a floating board is only so big…

On June 1, we will gently release Internet Explorer, version 11, from the list of browsers supported on our website [Archive.org](https://archive.org) into the oceanic depths of the obsolete. To give you an idea of what this means to us, a member of the UX team composed this little remembrance:

> *We hate you. Good-bye.*

Why the ichor? Why the bile? No doubt one too many sleepless nights struggling to make our website layout work with this venerable browser, released in 2013, which lacks support for so many features that are now standard in today’s browsers: module imports, web components, CSS Grid, ES6, the list goes on. Like its ancestor IE6, version 11 has clung to life far longer than it should have.

Though Microsoft support for it will not officially end until 2025, Microsoft’s Chief of Security, Chris Jackson, recently recommended in [a blog post](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/the-perils-of-using-internet-explorer-as-your-default-browser/ba-p/331732) that people stop using IE11 as their default browser. It is considered a “compatibility solution,” something you should only use for services that require it. Our analytics indicate that a mere 0.8% of our users use IE11 to browse the site. (Even worldwide usage is at 1-3%, the bulk of it from a country in which we are blocked.)

Plus, maintaining compatibility with IE11 — with its need for polyfills, transpilation, and other workarounds — gets expensive, especially for a small team such as ours. Generously supported by donations from people like you, we are committed to doing the greatest good with the resources we have, making the world’s knowledge available to as many people as possible. IE11 is a distraction, with a diminished and ever diminishing return on our efforts.

So farewell, IE11. We will sleep better and rise with a little more spring in our step, knowing that your phrase with us has reached its conclusion.

Posted in [News](https://blog.archive.org/category/news/), [Technical](https://blog.archive.org/category/technical/) | Tagged [browsers](https://blog.archive.org/tag/browsers/), [ie11](https://blog.archive.org/tag/ie11/) | <span class="comments-link">[6 Replies](https://blog.archive.org/2020/05/01/farewell-to-ie11/#comments)</span>

<img src="https://blog.archive.org/wp-content/uploads/2019/06/archive-input-cable-940x198.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" width="624" height="131" />

[Two Thin Strands of Glass](https://blog.archive.org/2019/06/29/two-thin-strands-of-glass/)
===========================================================================================

Posted on [June 29, 2019](https://blog.archive.org/2019/06/29/two-thin-strands-of-glass/ "2:31 am")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/robla/" class="url fn n" title="View all posts by robla">robla</a></span></span>

<figure><img src="https://blog.archive.org/wp-content/uploads/2019/06/archive-input-cable-669x1024.jpg" alt="There’s a tiny strand of glass inside that thick plastic coat." class="wp-image-18627" sizes="(max-width: 300px) 100vw, 300px" srcset="https://blog.archive.org/wp-content/uploads/2019/06/archive-input-cable-669x1024.jpg 669w, https://blog.archive.org/wp-content/uploads/2019/06/archive-input-cable-196x300.jpg 196w, https://blog.archive.org/wp-content/uploads/2019/06/archive-input-cable-768x1175.jpg 768w, https://blog.archive.org/wp-content/uploads/2019/06/archive-input-cable.jpg 1047w" width="300" height="458" /><figcaption>There’s a tiny strand of glass inside that thick plastic coat.</figcaption></figure>

Two thin strands of glass. When combined, these two strands of glass are so thin they still wouldn’t fill a drinking straw. That’s known in tech circles as a “fiber pair,” and these two thin strands of glass carry all the information of the world’s leading archive in and out of our data centers. When you think about it, it sounds kind of crazy that it works at all, *but it does*. Every day. Reliably.

Except this past Monday night, here in California…

On Monday, June 24, the real world had other ideas. As a result, the Internet Archive was down for 15 hours. For Californians, this was less of a big deal: those 15 hours stretched from mid-Monday evening (9:11pm on the US West coast), to 11:51am on Tuesday. Many Californians were asleep during several hours of that time. But in the [Central European time zone](https://en.wikipedia.org/wiki/Central_European_Summer_Time) (e.g. France, Germany, Italy, Poland, Tunisia), that fell on early Tuesday morning (06:11) to mid-Tuesday evening (21:51). And [in the entire country of India](https://en.wikipedia.org/wiki/Indian_Standard_Time), it was late Tuesday morning (09:41) to just after midnight on Wednesday (00:21).

<a href="https://blog.archive.org/2019/06/29/two-thin-strands-of-glass/#more-18599" class="more-link">Continue reading <span class="meta-nav">→</span></a>

Posted in [News](https://blog.archive.org/category/news/), [Technical](https://blog.archive.org/category/technical/) | <span class="comments-link">[6 Replies](https://blog.archive.org/2019/06/29/two-thin-strands-of-glass/#comments)</span>

[New Views Stats for the New Year](https://blog.archive.org/2018/12/19/new-views-stats-for-the-new-year/)
=========================================================================================================

Posted on [December 19, 2018](https://blog.archive.org/2018/12/19/new-views-stats-for-the-new-year/ "11:57 pm")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/wayback/" class="url fn n" title="View all posts by Alexis Rossi">Alexis Rossi</a></span></span>

We began developing a new system for counting views statistics on [archive.org](https://archive.org/) a few years ago. We had received feedback from our partners and users asking for more fine-grained information than the old system could provide. People wanted to know where their views were coming from geographically, and how many came from people vs. robots crawling the site.  

The new system will debut in January 2019. Leading up to that in the next couple of weeks you may see some inconsistencies in view counts as the new numbers roll out across tens of millions of items.    

With the new system you will see changes on both items and collections.  

**Item page changes**  

An “item” refers to a media item on archive.org – this is a page that features a book, a concert, a movie, etc. Here are some examples of items: [Jerky Turkey](https://archive.org/details/JerkyTurkey1945), [Emma](https://archive.org/details/EmmaJaneAusten_753), [Gunsmoke](https://archive.org/details/OTRR_Gunsmoke_Singles).  

On item pages the lifetime views will change to a new number.  This new number will be a sum of lifetime views from the legacy system through 2016, plus total views from the new system for the past two years (January 2017 through December 2018). Because we are replacing the 2017 and 2018 views numbers with data from the new system, the lifetime views number for that item ***may go down***. I will explain why this occurs further down in this post where we discuss how the new system differs from the legacy system.  

**Collection page changes**  

Soon on collection page About tabs ([example](https://archive.org/details/prelinger&tab=about)) you will see 2 separate views graphs. One will be for the old legacy system views through the end of 2018. The other will contain 2 years of views data from the new system (2017 and 2018). Moving forward, only the graph representing the new system will be updated with views numbers. The legacy graph will “freeze” as of December 2018.  

Both graphs will be on the page for a limited time, allowing you to compare your collections stats between the old and new systems.  We will not delete the legacy system data, but it may eventually move to another page. The data from both systems is also available through the views [API](https://archive.org/services/docs/api/views.html).  

**People vs. Robots**  

The graph for new collection views will additionally contain information about whether the views came from known “robots” or “people.”  Known robots include crawlers from major search engines, like Google or Bing. It is important for these robots to crawl your items – search engines are a major source of traffic to all of the items on archive.org. The robots number here is your assurance that search engines know your items exist and can point users to them.  The robots numbers also include access from our own internal robots (which is generally a very small portion of robots traffic).  

One note about robots: they like text-based files more than audio/visual files.  This means that text items on the archive that have a publicly accessible text file (the djvu.txt file) get more views from robots than other types of media in the archive. Search engines don’t just want the metadata about the book – they want the book itself.  

“People” are a little harder to define. Our confidence about whether a view comes from a person varies – in some cases we are very sure, and in others it’s more fuzzy, but in all cases we know the view is not from a known robot. So we have chosen to class these all together as “people,” as they are likely to represent access by end users.  

**What counts as a view in the new system**  

-   Each media item in the archive has a views counter.
-   The view counter is increased by 1 when a user engages with the media file(s) in an item.
    -   Media engagement includes experiencing the media through the player in the item page (pressing play on a video or audio player, flipping pages in the online bookreader, emulating software, etc.), downloading files, streaming files, or borrowing a book.
    -   All types of engagements are treated in the same way – they are all views.
-   A single user can only increase the view count of a particular item once per day.
    -   A user may view multiple media files in a single item, or view the same media file in a single item multiple times, but within one day that engagement will only count as 1 view.
-   Collection views are the sum of all the view counts of the items in the collection.
    -   When an item is in more than one collection, the item’s view counts are added to each collection it is in. This includes “parent” collections if the item is in a subcollection.
    -   When a user engages with a collection page (sorting, searching, browsing etc.), it does NOT count as a view of the collection.
    -   Items sometimes move in or out of collections. The views number on a collection represents the sum of the views of the items that are in the collection *at that time* (e.g. the September 1, 2018 views number for the collection represents the sum of the views on items that were in the collection on September 1, 2018. If an item moves out of that collection, the collection does not lose the views from September 1, 2018.).

**How the new system differs from the legacy system**  

When we designed the new system, we implemented some changes in what counted as a “view,” added some functionality, and repaired some errors that were discovered.    

-   The legacy system updated item views once per day and collection views once per month. The new system will update both item *and* collection views once per day.
-   The legacy system updated item views ~24 hours after a view was recorded.  The new system will update the views count ~4 days after the view was recorded. This time delay in the new system will decrease to ~24 hours at some point in the future.
-   The legacy system had no information about geographic location of users. The new system has approximate geolocation for every view. This geographic information is based on obfuscated IP addresses. It is accurate at a general level, but does not represent an individual user’s specific location.
-   The legacy system had no information about how many views were caused by robots crawling the site. The new system shows us how well the site is crawled by breaking out media access by robots (vs. interactions from people).
-   The legacy system did not count all book reader interactions as views.  The new system counts bookreader engagements as a view after 2 interactions (like page flips).
-   On audio and video items, the legacy system sometimes counted views when users saw \*any\* media in the item (like thumbnail images). The new system only counts engagements with the audio or video media files in an item in those media types, respectively.

In some cases, the differences above can lead to drastic changes in views numbers for both items and collections. While this may be disconcerting, we think the new system more accurately reflects end user behavior on archive.org.  

If you have questions regarding the new stats system, you may email us at <info@archive.org>.

Posted in [News](https://blog.archive.org/category/news/), [Technical](https://blog.archive.org/category/technical/) | <span class="comments-link">[7 Replies](https://blog.archive.org/2018/12/19/new-views-stats-for-the-new-year/#comments)</span>

[Identity in the Decentralized Web](https://blog.archive.org/2018/08/25/identity-in-the-decentralized-web/)
===========================================================================================================

Posted on [August 25, 2018](https://blog.archive.org/2018/08/25/identity-in-the-decentralized-web/ "12:13 am")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/jnelson/" class="url fn n" title="View all posts by Jim Nelson">Jim Nelson</a></span></span>

In B. Traven’s [*The Death Ship*](https://archive.org/details/deathshipstor00trav), American sailor Gerard Gales finds himself stranded in post-World War I Antwerp after his freighter departs without him.  He’s arrested for the crime of being unable to produce a passport, sailor’s card, or birth certificate—he possesses no identification at all.  Unsure how to process him, the police dump Gales on a train leaving the country. From there Gales endures a Kafkaesque journey across Europe, escorted from one border to another by authorities who do not know what to do with a man lacking any identity.  “I was just a nobody,” Gales complains to the reader.

As *The Death Ship* demonstrates, the concept of *verifiable identity* is a cornerstone of modern life.   Today we know well the process of signing in to shopping websites, checking email, doing some banking, or browsing our social network.  Without some notion of identity, these basic tasks would be impossible.

That’s why at the Decentralized Web Summit earlier this year, questions of identity were a central topic.  Unlike the current environment, in a decentralized web users control their personal data and make it available to third-parties on a need-to-know basis.  This is sometimes referred to as *self-sovereign identity*: the user, not web services, owns their personal information.

The idea is that web sites will verify you much as a bartender checks your ID before pouring a drink.  The bar doesn’t store a copy of your card and the bartender doesn’t look at your name or address; only your age is pertinent to receive service.  The next time you enter the bar the bartender once again asks for proof of age, which you may or may not relinquish. That’s the promise of self-sovereign identity.

[<img src="https://blog.archive.org/wp-content/uploads/2018/08/BuildersDayPostLunch1_0105-200x300.jpg" class="size-medium wp-image-16949 aligncenter" sizes="(max-width: 200px) 100vw, 200px" srcset="https://blog.archive.org/wp-content/uploads/2018/08/BuildersDayPostLunch1_0105-200x300.jpg 200w, https://blog.archive.org/wp-content/uploads/2018/08/BuildersDayPostLunch1_0105-681x1024.jpg 681w, https://blog.archive.org/wp-content/uploads/2018/08/BuildersDayPostLunch1_0105.jpg 692w" width="200" height="300" />](http://blog.archive.org/wp-content/uploads/2018/08/BuildersDayPostLunch1_0105.jpg)At the Decentralized Web Summit, questions and solutions were bounced around in the hopes of solving this fundamental problem.  Developers spearheading the next web hashed out the criteria for decentralized identity, including:

-   **secure**: to prevent fraud, maintain privacy, and ensure trust between all parties
-   **self-sovereign**: individual ownership of private information
-   **consent**: fine-tuned control over what information third-parties are privy to
-   **directed identity**: manage multiple identities for different contexts (for example, your doctor can access certain aspects while your insurance company accesses others)
-   and, of course, **decentralized**: no central authority or governing body holds private keys or generates identifiers

One problem with decentralized identity is that these problems often compete, pulling in polar directions.

For example, while security seems like a no-brainer, with self-sovereign identity the end-user is in control (and not Facebook, Google, or Twitter).  It’s incumbent on them to secure their information. This raises questions of key management, data storage practices, and so on. Facebook, Google, and Twitter pay full-time engineers to do this job; handing that responsibility to end-users shifts the burden to someone who may not be so technically savvy.  The inconvenience of key management and such also creates more hurdles for widespread adoption of the decentralized web.

The good news is, there are many working proposals today attempting to solve the above problems.  One of the more promising is DID (Decentralized Identifier).

A DID is simply a URI, a familiar piece of text to most people nowadays.  Each DID references a record stored in a blockchain. DIDs are not tied to any particular blockchain, and so they’re interoperable with existing and future technologies.  DIDs are cryptographically secure as well.

DIDs require no central authority to produce or validate.  If you want a DID, you can generate one yourself, or as many was you want.  In fact, you *should* generate lots of them.  Each unique DID gives the user fine-grained control over what personal information is revealed when interacting with a myriad of services and people.

If you’re interested to learn more, I recommend reading Michiel Mulders’ article on DIDs, [“the Internet’s ‘missing identity layer’.”](https://www.cointelligence.com/content/decentralized-identifiers-dids-internets-missing-identity-layer/)  The [DID working technical specification](https://w3c-ccg.github.io/did-spec/) is being developed by the W3C.  And those looking for code and community, check out the [Decentralized Identity Foundation](https://identity.foundation/).

(While DIDs are promising, it is a nascent technology.  Other options are under development.  I’m using DIDs as an example of how decentralized identity might work.)

What does the future hold for self-sovereign identification?  From what I saw at the Decentralized Web, I’m certain a solution will be found.

Posted in [Announcements](https://blog.archive.org/category/announcements/), [Event](https://blog.archive.org/category/event/), [Past Event](https://blog.archive.org/category/event/past-event/), [Technical](https://blog.archive.org/category/technical/) | <span class="comments-link">[1 Reply](https://blog.archive.org/2018/08/25/identity-in-the-decentralized-web/#comments)</span>

<img src="https://blog.archive.org/wp-content/uploads/2018/04/video-before-800x198.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" width="624" height="154" />

[Audio / Video player updated – to jwplayer v8.2](https://blog.archive.org/2018/04/11/audio-video-player-updated-to-jwplayer-v8-2/)
===================================================================================================================================

Posted on [April 11, 2018](https://blog.archive.org/2018/04/11/audio-video-player-updated-to-jwplayer-v8-2/ "9:07 pm")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/traceypooh/" class="url fn n" title="View all posts by traceypooh">traceypooh</a></span></span>

We updated our audio/video (and TV) 3rd party JS-based player from v6.8 to v8.2 today.

This was updated with some code to have the same feature set as before, as well as new:

-   much nicer **cosmetic/look** updates
-   nice **“rewind 10 seconds” button**
-   controls are now in an updated control bar
-   (video) **‘Related Items’** now uses the same (better) recommendations from the bottom of an archive.org /details/ page
-   Airplay (Safari) and Chromecast **basic casting controls** in player
-   playback **speed rate control** now easier to use / set
-   playback **keyboard control** with `SPACE` and `left` , `right` and `up`, `down` keys
-   (video) Web VTT (captions) has much better user interface and display
-   **flash** is now *only* used to play audio/video if html5 doesnt work (flash does not do layout or controls now)

Here’s some before / after screenshots:

[<img src="https://blog.archive.org/wp-content/uploads/2018/04/video-after-300x188.png" class="alignnone size-medium wp-image-16352" sizes="(max-width: 300px) 100vw, 300px" srcset="https://blog.archive.org/wp-content/uploads/2018/04/video-after-300x188.png 300w, https://blog.archive.org/wp-content/uploads/2018/04/video-after-768x480.png 768w, https://blog.archive.org/wp-content/uploads/2018/04/video-after.png 800w" width="300" height="188" />](https://blog.archive.org/wp-content/uploads/2018/04/video-after.png) [<img src="https://blog.archive.org/wp-content/uploads/2018/04/video-before-300x188.png" class="alignnone size-medium wp-image-16353" sizes="(max-width: 300px) 100vw, 300px" srcset="https://blog.archive.org/wp-content/uploads/2018/04/video-before-300x188.png 300w, https://blog.archive.org/wp-content/uploads/2018/04/video-before-768x480.png 768w, https://blog.archive.org/wp-content/uploads/2018/04/video-before.png 800w" width="300" height="188" />](https://blog.archive.org/wp-content/uploads/2018/04/video-before.png) [<img src="https://blog.archive.org/wp-content/uploads/2018/04/audio-after-300x94.png" class="alignnone size-medium wp-image-16354" sizes="(max-width: 300px) 100vw, 300px" srcset="https://blog.archive.org/wp-content/uploads/2018/04/audio-after-300x94.png 300w, https://blog.archive.org/wp-content/uploads/2018/04/audio-after-768x240.png 768w, https://blog.archive.org/wp-content/uploads/2018/04/audio-after.png 800w" width="300" height="94" />](https://blog.archive.org/wp-content/uploads/2018/04/audio-after.png) [<img src="https://blog.archive.org/wp-content/uploads/2018/04/audio-before-300x94.png" class="alignnone size-medium wp-image-16355" sizes="(max-width: 300px) 100vw, 300px" srcset="https://blog.archive.org/wp-content/uploads/2018/04/audio-before-300x94.png 300w, https://blog.archive.org/wp-content/uploads/2018/04/audio-before-768x240.png 768w, https://blog.archive.org/wp-content/uploads/2018/04/audio-before.png 800w" width="300" height="94" />](https://blog.archive.org/wp-content/uploads/2018/04/audio-before.png)

Posted in [78rpm](https://blog.archive.org/category/audio-archive/78rpm/), [Audio Archive](https://blog.archive.org/category/audio-archive/), [Live Music Archive](https://blog.archive.org/category/live-music-archive-2/), [Movie Archive](https://blog.archive.org/category/movie-archive/), [Technical](https://blog.archive.org/category/technical/), [Television Archive](https://blog.archive.org/category/television-archive/), [Video Archive](https://blog.archive.org/category/video-archive/) | Tagged [audio](https://blog.archive.org/tag/audio/), [captions](https://blog.archive.org/tag/captions/), [jwplayer](https://blog.archive.org/tag/jwplayer/), [live music archive](https://blog.archive.org/tag/live-music-archive/), [movies](https://blog.archive.org/tag/movies/), [TV news archive](https://blog.archive.org/tag/tv-news-archive/), [video](https://blog.archive.org/tag/video/) | <span class="comments-link">[18 Replies](https://blog.archive.org/2018/04/11/audio-video-player-updated-to-jwplayer-v8-2/#comments)</span>

<img src="https://blog.archive.org/wp-content/uploads/2018/03/vtt-940x198.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" width="624" height="131" />

[Archive video now supports WebVTT for captions](https://blog.archive.org/2018/03/07/archive-video-now-supports-webvtt-for-captions/)
=====================================================================================================================================

Posted on [March 7, 2018](https://blog.archive.org/2018/03/07/archive-video-now-supports-webvtt-for-captions/ "10:04 pm")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/traceypooh/" class="url fn n" title="View all posts by traceypooh">traceypooh</a></span></span>

We now support **.vtt files** **(Web Video Text Tracks)** in addition to **.srt (SubRip)** (.srt we have supported for years) files for captioning your videos.

It’s as simple as uploading a “parallel filename” to your video file(s).

Examples:

-   myvid.mp4
-   myvid.srt
-   myvid.vtt

Multi-lang support:

-   myvid.webm
-   myvid.en.vtt
-   myvid.en.srt
-   myvid.es.vtt

Here’s a nice example item:  
<https://archive.org/details/cruz-test>

[<img src="https://blog.archive.org/wp-content/uploads/2018/03/vtt-300x291.png" class="size-medium wp-image-16119" sizes="(max-width: 300px) 100vw, 300px" srcset="https://blog.archive.org/wp-content/uploads/2018/03/vtt-300x291.png 300w, https://blog.archive.org/wp-content/uploads/2018/03/vtt-768x746.png 768w, https://blog.archive.org/wp-content/uploads/2018/03/vtt-1024x994.png 1024w, https://blog.archive.org/wp-content/uploads/2018/03/vtt.png 1104w" width="300" height="291" />](http://blog.archive.org/wp-content/uploads/2018/03/vtt.png)

VTT with caption picker (and upcoming A/V player too!)

(We will have an updated A/V player with a better “picker” for so many language tracks in days, have no fear 😎

Enjoy!

 

Posted in [Technical](https://blog.archive.org/category/technical/), [Television Archive](https://blog.archive.org/category/television-archive/), [Video Archive](https://blog.archive.org/category/video-archive/) | Tagged [captions](https://blog.archive.org/tag/captions/), [jwplayer](https://blog.archive.org/tag/jwplayer/), [movies](https://blog.archive.org/tag/movies/), [video](https://blog.archive.org/tag/video/) | <span class="comments-link"></span>

[Using Kakadu JPEG2000 Compression to Meet FADGI Standards](https://blog.archive.org/2017/07/31/using-kakadu-jpeg2000-compression-to-meet-fadgi-standards/)
===========================================================================================================================================================

Posted on [July 31, 2017](https://blog.archive.org/2017/07/31/using-kakadu-jpeg2000-compression-to-meet-fadgi-standards/ "9:00 pm")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/internetarchive/" class="url fn n" title="View all posts by jeff kaplan">jeff kaplan</a></span></span>

The Internet Archive is grateful to the folks at Kakadu Software for contributing to Universal Access to Knowledge by providing the world’s leading implementation of the JPEG2000 standard, used in the Archive’s image processing systems.

Here at the Archive, we digitize over a thousand books a day. JPEG2000, an image coding system that uses compression techniques based on wavelet technology, is a preferred file format for storing these images efficiently, while also providing advantages for presentation quality and metadata richness. The Library of Congress has documented its adoption of the JPEG2000 file format for a number of digitization projects, including its text collections on [archive.org](https://archive.org).

Recently we started using their SDK to apply some color corrections to the images coming from our cameras. This has helped us achieve FADGI standards in our work with the Library of Congress.

Thank you, Kakadu, for helping make it possible for millions of books to be digitized, stored, and made available with high quality on [archive.org](https://archive.org)!

If you are interested in finding out more about Kakadu Software’s powerful software toolkit for JPEG2000 developers, visit [kakadusoftware.com](http://kakadusoftware.com) or email <info@kakadusoftware.com>.

<img src="https://blog.archive.org/wp-content/uploads/2017/07/kakadu-software_logo-300x28.png" class="alignleft size-medium wp-image-14235" sizes="(max-width: 300px) 100vw, 300px" srcset="https://blog.archive.org/wp-content/uploads/2017/07/kakadu-software_logo-300x28.png 300w, https://blog.archive.org/wp-content/uploads/2017/07/kakadu-software_logo-768x72.png 768w, https://blog.archive.org/wp-content/uploads/2017/07/kakadu-software_logo-1024x96.png 1024w" width="300" height="28" />

Posted in [Technical](https://blog.archive.org/category/technical/) | <span class="comments-link">[1 Reply](https://blog.archive.org/2017/07/31/using-kakadu-jpeg2000-compression-to-meet-fadgi-standards/#comments)</span>

[The Hidden Shifting Lens of Browsers](https://blog.archive.org/2016/08/16/the-hidden-shifting-lens-of-browsers/)
=================================================================================================================

Posted on [August 16, 2016](https://blog.archive.org/2016/08/16/the-hidden-shifting-lens-of-browsers/ "2:56 am")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/jasonscott/" class="url fn n" title="View all posts by Jason Scott">Jason Scott</a></span></span>

[<img src="https://blog.archive.org/wp-content/uploads/2016/08/browsersoup.png" title="Multiple browser logos" alt="browsersoup" class="aligncenter wp-image-11457 size-full" sizes="(max-width: 461px) 100vw, 461px" srcset="https://blog.archive.org/wp-content/uploads/2016/08/browsersoup.png 461w, https://blog.archive.org/wp-content/uploads/2016/08/browsersoup-300x195.png 300w" width="461" height="300" />](http://blog.archive.org/wp-content/uploads/2016/08/browsersoup.png)

Some time ago, I wrote about the [interesting situation we had with emulation](https://blog.archive.org/2016/06/27/those-hilarious-times-when-emulations-stop-working/) and Version 51 of the Chrome browser – that is, our emulations stopped working in a very strange way and many people came to the Archive’s inboxes asking what had broken. The [resulting fix](https://bugs.chromium.org/p/chromium/issues/detail?id=621926) took a lot of effort and collaboration with groups and volunteers to track down, but it was successful and ever since, every version of Chrome has worked as expected.

But besides the interesting situation with this bug (it actually made us perfectly emulate a broken machine!), it also brought into a very sharp focus the hidden, fundamental aspect of Browsers that can easily be forgotten: **Each browser is an opinion, a lens of design and construction that allows its user a very specific facet of how to address the Internet and the Web.** And these lenses are something that can shift and turn on a dime, and change the nature of this online world in doing so.

An eternal debate rages on what the Web is “for” and how the Internet should function in providing information and connectivity. For the now-quite-embedded millions of users around the world who have only known a world with this Internet and WWW-provided landscape, the nature of existence centers around the interconnected world we have, and the browsers that we use to communicate with it.

[<img src="https://blog.archive.org/wp-content/uploads/2016/08/Netscape1-about-1024x656.gif" title="Netscape Navigator 1.0" alt="Netscape1-about-1024x656" class="aligncenter wp-image-11462 size-full" width="1024" height="656" />](http://blog.archive.org/wp-content/uploads/2016/08/Netscape1-about-1024x656.gif)

Avoiding too much of a history lesson at this point, let’s instead just say that when Browsers entered the landscape of computer usage in a big way after being one of several resource-intensive experimental programs. In circa 1995, the effect on computing experience and acceptance was unparalleled since the plastic-and-dreams [home computer revolution of the 1980s](https://archive.org/details/computermagazines?sort=-publicdate&and%5B%5D=mediatype%3A%22collection%22). Suddenly, in one program came basically all the functions of what a computer might possibly do for an end user, all of it linked and described and seemingly infinite. The more technically-oriented among us can point out the gaps in the dream and the real-world efforts behind the scenes to make things do what they promised, of course. But the fundamental message was: *[Get a Browser, Get the Universe.](https://archive.org/details/mac_Netscape_gator_v_1.1_1995) *Throughout the late 1990s, access came in the form of [mailed CD-ROMs](https://archive.org/details/AOL_Version_3_Sign_On_Now_00001354_America_On-Line), or built-in packaging, or Internet Service Providers sending along the details on how to get your machine connected, and get that browser up and running.

As I’ve hinted at, though, this shellac of a browser interface was the rectangular window to a very deep, almost *[Brazil](http://www.imdb.com/title/tt0088846/combined)–*like series of ad-hoc infrastructure, clumsily-cobbled standards and almost-standards, and ever-shifting priorities in what this whole “WWW” experience could even possibly *be*. It’s absolutely *great*, but it’s also been absolutely *arbitrary.*

With web anniversaries aplenty now coming into the news, it’ll be very easy to forget *how* utterly arbitrary a lot of what we think the “Web” is, happens to be.

[<img src="https://blog.archive.org/wp-content/uploads/2016/08/image444.png" title="Yahoo! Home page in Internet Explorer 2.0" alt="image444" class="aligncenter wp-image-11463 size-full" sizes="(max-width: 575px) 100vw, 575px" srcset="https://blog.archive.org/wp-content/uploads/2016/08/image444.png 575w, https://blog.archive.org/wp-content/uploads/2016/08/image444-300x183.png 300w" width="575" height="351" />](http://blog.archive.org/wp-content/uploads/2016/08/image444.png)  
There’s no question that commercial interests have driven a lot of browser features – the ability to transact financially, to ensure the prices or offers you are being shown, are of primary interest to vendors. Encryption, password protection, multi-factor authentication and so on are sometimes given lip service for private communications, but they’ve historically been presented for the store to ensure the cash register works. From the early days of a small padlock icon being shown locked or unlocked to indicate “safe”, to official “badges” or “certifications” being part of a webpage, the browsers have frequently shifted their character to promise commercial continuity. (The addition of “black box” code to browsers to satisfy the ability to stream entertainment is a subject for another time.)

Flowing from this same thinking has been the overriding need for *design control*, where the visual or interactive aspects of webpages are the same for everyone, no matter what browser they happen to be using. Since this was fundamentally impossible in the early days (different browsers have different “looks” no matter what), the solutions became more and more involved:

-   Use very large image-based mapping to control every visual aspect
-   Add a variety of specific binary “plugins” or “runtimes” by third parties
-   Insist on adoption of a number of extra-web standards to control the look/action
-   Demand all users use the same browser to access the site

Evidence of all these methods pop up across the years, with variant success.

Some of the more well-adopted methods include the Flash runtime for visuals and interactivity, and the use of Java plugins for running programs within the confines of the browser’s rectangle. Others, such as the wide use of Rich Text Format (.RTF) for reading documents, or the Realaudio/video plugins, gained followers or critics along the way, and were ultimately faded into obscurity.

And as for demanding all users use the same browser… well, that still happens, but not with the same panache as the [old Netscape Now! buttons](http://textfiles.com/underconstruction/netscape/).

[<img src="https://blog.archive.org/wp-content/uploads/2016/08/ie-rip.jpg" title="Internet Explorer 1.0" alt="ie-rip" class="aligncenter wp-image-11465 size-full" sizes="(max-width: 410px) 100vw, 410px" srcset="https://blog.archive.org/wp-content/uploads/2016/08/ie-rip.jpg 410w, https://blog.archive.org/wp-content/uploads/2016/08/ie-rip-300x225.jpg 300w" width="410" height="308" />](http://blog.archive.org/wp-content/uploads/2016/08/ie-rip.jpg)

This puts the Internet Archive into a very interesting position.

With 20 years of the World Wide Web saved in the Wayback machine, and URLs by the billions, we’ve seen the moving targets move, and how fast they move. Where a site previously might be a simple set of documents and instructions that could be arranged however one might like, **there are a whole family of sites with much more complicated inner workings than will be captured by any external party, in the same way you would capture a museum by photographing its paintings through a window from the courtyard.  **

When you visit the Wayback and pull up that old site and find things look differently, or are rendered oddly, that’s a lot of what’s going on: weird internal requirements, experimental programming, or tricks and traps that only worked in one brand of browser and one version of that browser from 1998. The lens shifted; the mirror has cracked since then.

[<img src="https://blog.archive.org/wp-content/uploads/2016/08/NextEditorBW.gif" title="The first Web Browser by Tim Berners-Lee at CERN" alt="NextEditorBW" class="aligncenter wp-image-11466 size-full" width="808" height="594" />](http://blog.archive.org/wp-content/uploads/2016/08/NextEditorBW.gif)  
This is a lot of philosophy and stray thoughts, but what am I bringing this up for?

*The browsers that we use today, the Firefoxes and the Chromes and the Edges and the Braves and the mobile white-label affairs, are ever-shifting in their own right, more than ever before, and should be recognized as such.*

It was inevitable that constant-update paradigms would become dominant on the Web: you start a program and it does *something* and suddenly you’re using version 54.01 instead of version 53.85. If you’re lucky, there might be a “changes” list, but that luck might be variant because many simply write “bug fixes”. In these updates are the closing of serious performance or security issues – and as someone who knows the days when you might have to mail in for a floppy disk to be sent in a few weeks to make your program work, I can totally get behind the new “we fixed it before you knew it was broken” world we live in. Everything does this: phones, game consoles, laptops, even routers and medical equipment.

But along with this shifting of versions comes the occasional fundamental change in what browsers *do*, along with making some aspect of the Web obsolete in a very hard-lined way.

Take, for example, [Gopher](https://en.wikipedia.org/wiki/Gopher_(protocol)), a (for lack of an easier description) proto-web that allowed machines to be “browsed” for information that would be easy for users to find. The ability to search, to grab files or writings, and to share your own pools of knowledge were all part of the “Gopherspace”. It was also rather non-graphical by nature and technically oriented at the time, and the graphical “WWW” utterly *flattened *it when the time came.

But since Gopher had been a not-insignificant part of the Internet when web browsers were new, many of them would wrap in support for Gopher as an option. You’d use the **gopher://** URI, and much like the ftp:// or file:// URIs, it co-existed with http:// as a method for reaching the world.

Until it didn’t.

Microsoft, citing security concerns, dropped Gopher support out of its Internet Explorer browser in 2002. Mozilla, after a years-long debate, did so in 2010. Here’s the [Mozilla Firefox debate that raged over Gopher Protocol removal](https://bugzilla.mozilla.org/show_bug.cgi?id=388195). The functionality was later brought back externally in the [form of a Gopher plugin](https://addons.mozilla.org/en-US/firefox/addon/overbiteff/). Chrome never had Gopher support. (Many other browsers have Gopher support, even today, but they have very, very small audiences.)

[The Archive has an assembled collection of Gopherspace material here](https://archive.org/details/2007-gopher-mirror).  From this material, as well as other sources, there are web-enabled versions of Gopherspace (basically, http:// versions of the gopher:// experience) that bring back some aspects of Gopher, if only to allow for a nostalgic stroll. But nobody would dream of making something brand new in that protocol, except to prove a point or for the technical exercise. The lens has refocused.

In the present, Flash is beginning a slow, harsh exile into the web pages of history – browser support dropping, and even Adobe whittling away support and upkeep of all of Flash’s forward-facing projects. Flash was a *very big deal* in its heyday – animation, menu interface, games, and a whole other host of what we think of as “The Web” depended utterly on Flash, and even specific versions and variations of Flash. As the sun sets on this technology, attempts to be able to still view it like the [Shumway project](http://mozilla.github.io/shumway/) will hopefully allow the lens a few more years to be capable of seeing this body of work.

As we move forward in this business of “saving the web”, we’re going to experience “save the browsers”, “save the network”, and “save the experience” as well. Browsers themselves drop or add entire components or functions, and being able to touch older material becomes successively more difficult, especially when you might have to use an older browser with security issues. Our [in-browser emulation](https://archive.org/details/softwarelibrary?and%5B%5D=mediatype%3A%22collection%22) might be a solution, or special “filters” on the [Wayback](https://archive.org/web) for seeing items as they were back then, but it’s not an easy task at all – and it’s a lot of effort to see information that is just a decade or two old. It’s going to be very, very difficult.

But maybe recognizing these browsers for what they are, and coming up with ways to keep these lenses polished and flexible, is a good way to start.

Posted in [Emulation](https://blog.archive.org/category/emulation/), [Technical](https://blog.archive.org/category/technical/), [Wayback Machine - Web Archive](https://blog.archive.org/category/wayback-machine/) | <span class="comments-link">[2 Replies](https://blog.archive.org/2016/08/16/the-hidden-shifting-lens-of-browsers/#comments)</span>

[Those Hilarious Times When Emulations Stop Working](https://blog.archive.org/2016/06/27/those-hilarious-times-when-emulations-stop-working/)
=============================================================================================================================================

Posted on [June 27, 2016](https://blog.archive.org/2016/06/27/those-hilarious-times-when-emulations-stop-working/ "6:18 pm")<span class="by-author"> by <span class="author vcard"><a href="https://blog.archive.org/author/jasonscott/" class="url fn n" title="View all posts by Jason Scott">Jason Scott</a></span></span>

Jason Scott, Software Curator and Your Emulation Buddy, writing in.

With [tens of thousands of items](https://archive.org/details/softwarelibrary?and%5B%5D=emulator%3A%2A&sort=-downloads) in the archive.org stacks that are in some way running in-browser emulations, we’ve got a pretty strong library of computing history afoot, with many more joining in the future. On top of that, we have thousands of people playing these different [programs](https://archive.org/details/softwarelibrary?and%5B%5D=mediatype%3A%22collection%22), [consoles](https://archive.org/details/consolelivingroom), and [arcade games](https://archive.org/details/internetarcade) from all over the world.

Therefore, if anything goes slightly amiss, we hear it from every angle: twitter, item reviews, e-mails, and even the occasional phone call. People expect to come to a software item on the Internet Archive and have it play in their browser! It’s *great* this expectation is now considered a critical aspect of computer and game history. But it also means we have to go hunting down what the problem might be when stuff goes awry.

Sometimes, it’s something nice and simple, like “I can’t figure out the keys or the commands” or “How do I find the magic sock in the village.”, which puts us in the position of a sort of 1980s Software Company Help Line. Other times, it’s helping fix situations where some emulated software is configured wrong and certain functions don’t work. (The emulation might run too fast, or show the wrong colors, or not work past a certain point in the game.)

But then sometimes it’s something like this:

[<img src="https://blog.archive.org/wp-content/uploads/2016/06/78909ba7-8f19-4df2-8eb8-66b60edba0e9.jpg" alt="78909ba7-8f19-4df2-8eb8-66b60edba0e9" class="size-full wp-image-11224 aligncenter" sizes="(max-width: 528px) 100vw, 528px" srcset="https://blog.archive.org/wp-content/uploads/2016/06/78909ba7-8f19-4df2-8eb8-66b60edba0e9.jpg 528w, https://blog.archive.org/wp-content/uploads/2016/06/78909ba7-8f19-4df2-8eb8-66b60edba0e9-300x215.jpg 300w" width="528" height="378" />](http://blog.archive.org/wp-content/uploads/2016/06/78909ba7-8f19-4df2-8eb8-66b60edba0e9.jpg)

In this case, a set of programs were all working just fine a while ago, and then suddenly started sending out weird “Runtime” errors. Or this nostalgia-inducing error:

[<img src="https://blog.archive.org/wp-content/uploads/2016/06/654c1e0c-a047-4c82-9b23-72620af9dbf5.jpg" alt="654c1e0c-a047-4c82-9b23-72620af9dbf5" class="size-full wp-image-11225 aligncenter" sizes="(max-width: 586px) 100vw, 586px" srcset="https://blog.archive.org/wp-content/uploads/2016/06/654c1e0c-a047-4c82-9b23-72620af9dbf5.jpg 586w, https://blog.archive.org/wp-content/uploads/2016/06/654c1e0c-a047-4c82-9b23-72620af9dbf5-300x163.jpg 300w" width="586" height="318" />](http://blog.archive.org/wp-content/uploads/2016/06/654c1e0c-a047-4c82-9b23-72620af9dbf5.jpg)

Here’s the interesting thing: *The emulated historic machine would continue to run*. In other words, we had a still-functioning, emulated *broken machine,* as if you’d brought home a damaged 486 PC in 1993 from the store and realized it was made of cheaper parts than you expected.

To make things even more strange, this was only happening to emulated DOS programs in the Google Chrome browser. And only Google Chrome version 51.x. *And only in the 32-bit version of Google Chrome 51.x. (*A huge thanks to the growing number of people who helped this get tracked down.)

This is what people should have been seeing, which I think we can agree looks much better:

[<img src="https://blog.archive.org/wp-content/uploads/2016/06/screenshot_00.jpg" alt="screenshot_00" class="size-full wp-image-11226 aligncenter" sizes="(max-width: 648px) 100vw, 648px" srcset="https://blog.archive.org/wp-content/uploads/2016/06/screenshot_00.jpg 648w, https://blog.archive.org/wp-content/uploads/2016/06/screenshot_00-300x189.jpg 300w" width="648" height="408" />](http://blog.archive.org/wp-content/uploads/2016/06/screenshot_00.jpg)

The short-term fix is to run Firefox instead of Chrome for the moment if you see a crash, but that’s not really a “fix” per se – Chrome has had the bug reported to them and they’re hard at work on it (and [working on a bug](https://bugs.chromium.org/p/chromium/issues/detail?id=621926) can be a lot of work). And there’s no guarantee an update to Firefox (or the Edge Browser, or any of the other browsers working today) won’t cause other weird problems going down the line.

All this, then, can remind people how strange, how interlocking, and even fragile our web ecosystem is at the moment. The “Web” is a web of standards dancing with improvisations, hacks, best guesses and a radically moving target of what needs to be obeyed and discarded. With the automatic downloading of new versions of browsers from a small set of makers, we gain security, but more-obscure bugs might change the functioning of a website overnight. We make sure the newest standards are followed as quickly as possible, but we also wake up to finding out an old trusted standard was deemed no longer worthy of use.

Old standards or features (background music in web pages, the [*gopher* protocol](https://archive.org/details/2007-gopher-mirror), Flash) give way to new plugins or processes, and the web must be expected, as best it can, to deal with the new and the old and fail gracefully when it can’t quite do it. As part of the work of the [Decentralized Web Summit](http://www.decentralizedweb.net/) was to bring forward the strengths of this world (collaboration, transparency, reproducibility) while pulling back from the weaknesses of this shifting landscape (centralization, gatekeeping, utter and total loss of history), it’s obvious a lot of people recognize this is an ongoing situation, needing vigilance and hard work.

In the meantime, we’ll do our best to keep on how the latest and greatest browsers deal with the still-fresh world of in-browser emulation, and try to emulate hardware that *did *come working from the factory.

In the meantime, [enjoy some Apple II programs](https://archive.org/details/softwarelibrary_apple?and%5B%5D=mediatype%3A%22collection%22). On us.

Posted in [Emulation](https://blog.archive.org/category/emulation/), [Software Archive](https://blog.archive.org/category/software-archive/), [Technical](https://blog.archive.org/category/technical/) | <span class="comments-link">[2 Replies](https://blog.archive.org/2016/06/27/those-hilarious-times-when-emulations-stop-working/#comments)</span>

### Post navigation

[<span class="meta-nav">←</span> Older posts](https://blog.archive.org/category/technical/page/2/)

<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblog.archive.org%2Fcategory%2Ftechnical" class="shareitem"><img src="https://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/facebook-icon.png" alt="Share to Facebook" /></a> <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fblog.archive.org%2Fcategory%2Ftechnical&amp;via=internetarchive&amp;text=Those+Hilarious+Times+When+Emulations+Stop+Working" class="shareitem"><img src="https://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/twitter-icon.png" alt="Share to Twitter" /></a>

Search for:

### Recent Posts

-   [Turns Out It’s Not the Technology, It’s the People](https://blog.archive.org/2021/10/22/turns-out-its-not-the-technology-its-the-people/)
-   [LaTurbo Avedon’s Hypertext Wishes](https://blog.archive.org/2021/10/21/laturbo-hypertextwishes/)
-   [Celebrating Kanta Kapoor: 2021 Internet Archive Hero Award Recipient](https://blog.archive.org/2021/10/20/celebrating-kanta-kapoor-2021-internet-archive-hero-award-recipient/)
-   [Celebrating Lisa Radha Weaver: 2021 Internet Archive Hero Award Recipient](https://blog.archive.org/2021/10/20/celebrating-lisa-radha-weaver-2021-internet-archive-hero-award-recipient/)
-   [Olia Lialina gives good wishes with her artwork Perpetual Calendar](https://blog.archive.org/2021/10/20/olia-lialina-gives-good-wishes-with-her-artwork-perpetual-calendar/)

### Recent Comments

-   <span class="comment-author-link"><a href="https://gisomusic.com/" class="url">giso</a></span> on [Turns Out It’s Not the Technology, It’s the People](https://blog.archive.org/2021/10/22/turns-out-its-not-the-technology-its-the-people/#comment-412129)
-   <span class="comment-author-link"><a href="https://violinmusics.com/" class="url">آهنگ جدید</a></span> on [Turns Out It’s Not the Technology, It’s the People](https://blog.archive.org/2021/10/22/turns-out-its-not-the-technology-its-the-people/#comment-412119)
-   <span class="comment-author-link">Madhulika</span> on [Celebrating Kanta Kapoor: 2021 Internet Archive Hero Award Recipient](https://blog.archive.org/2021/10/20/celebrating-kanta-kapoor-2021-internet-archive-hero-award-recipient/#comment-412050)
-   <span class="comment-author-link"><a href="https://librarycognizance.blogspot.com/" class="url">Rangoli Awasthi</a></span> on [Librarians Kanta Kapoor and Lisa Radha Weaver to Receive 2021 Internet Archive Hero Award](https://blog.archive.org/2021/10/13/librarians-kanta-kapoor-and-lisa-radha-weaver-to-receive-internet-archive-hero-award-2021/#comment-412047)
-   <span class="comment-author-link">Kanta Kapoor</span> on [Celebrating Kanta Kapoor: 2021 Internet Archive Hero Award Recipient](https://blog.archive.org/2021/10/20/celebrating-kanta-kapoor-2021-internet-archive-hero-award-recipient/#comment-412032)

### Categories

-   [78rpm](https://blog.archive.org/category/audio-archive/78rpm/)
-   [Announcements](https://blog.archive.org/category/announcements/)
-   [Archive Version 2](https://blog.archive.org/category/archive-version-2/)
-   [Archive-It](https://blog.archive.org/category/archive-it/)
-   [Audio Archive](https://blog.archive.org/category/audio-archive/)
-   [Books Archive](https://blog.archive.org/category/books-archive/)
-   [Cool items](https://blog.archive.org/category/cool-items/)
-   [Education Archive](https://blog.archive.org/category/education-archive/)
-   [Emulation](https://blog.archive.org/category/emulation/)
-   [Event](https://blog.archive.org/category/event/)
-   [Image Archive](https://blog.archive.org/category/image-archive/)
-   [Jobs](https://blog.archive.org/category/jobs/)
-   [Lending Books](https://blog.archive.org/category/books-archive/lending-books/)
-   [Live Music Archive](https://blog.archive.org/category/live-music-archive-2/)
-   [Movie Archive](https://blog.archive.org/category/movie-archive/)
-   [Music](https://blog.archive.org/category/music/)
-   [News](https://blog.archive.org/category/news/)
-   [Newsletter](https://blog.archive.org/category/newsletter/)
-   [Open Library](https://blog.archive.org/category/open-library/)
-   [Past Event](https://blog.archive.org/category/event/past-event/)
-   [Software Archive](https://blog.archive.org/category/software-archive/)
-   [Technical](https://blog.archive.org/category/technical/)
-   [Television Archive](https://blog.archive.org/category/television-archive/)
-   [Upcoming Event](https://blog.archive.org/category/event/upcoming-event/)
-   [Video Archive](https://blog.archive.org/category/video-archive/)
-   [Wayback Machine – Web Archive](https://blog.archive.org/category/wayback-machine/)
-   [Web & Data Services](https://blog.archive.org/category/web-data-services/)

### Archives

Archives Select Month October 2021 September 2021 August 2021 July 2021 June 2021 May 2021 April 2021 March 2021 February 2021 January 2021 December 2020 November 2020 October 2020 September 2020 August 2020 July 2020 June 2020 May 2020 April 2020 March 2020 February 2020 January 2020 December 2019 November 2019 October 2019 September 2019 August 2019 July 2019 June 2019 May 2019 April 2019 March 2019 February 2019 January 2019 December 2018 November 2018 October 2018 September 2018 August 2018 July 2018 June 2018 May 2018 April 2018 March 2018 February 2018 January 2018 December 2017 November 2017 October 2017 September 2017 August 2017 July 2017 June 2017 May 2017 April 2017 March 2017 February 2017 January 2017 December 2016 November 2016 October 2016 September 2016 August 2016 July 2016 June 2016 May 2016 April 2016 March 2016 February 2016 January 2016 December 2015 November 2015 October 2015 September 2015 July 2015 June 2015 May 2015 April 2015 March 2015 February 2015 January 2015 December 2014 November 2014 October 2014 September 2014 August 2014 July 2014 June 2014 May 2014 April 2014 March 2014 February 2014 January 2014 December 2013 November 2013 October 2013 September 2013 August 2013 July 2013 June 2013 May 2013 April 2013 March 2013 February 2013 January 2013 December 2012 November 2012 October 2012 September 2012 August 2012 July 2012 June 2012 May 2012 April 2012 March 2012 February 2012 January 2012 December 2011 November 2011 October 2011 September 2011 August 2011 July 2011 June 2011 May 2011 April 2011 March 2011 February 2011 January 2011 December 2010 November 2010 October 2010 September 2010 August 2010 July 2010 June 2010 May 2010 April 2010 March 2010 February 2010 January 2010 December 2009 October 2009 September 2009 August 2009 July 2009 June 2009 May 2009 April 2009 March 2009 February 2009 January 2009 December 2008 November 2008 September 2008 August 2008 June 2008 May 2008 April 2008 March 2008 February 2008 January 2008 December 2007 October 2007 September 2007 August 2007 July 2007 June 2007 May 2007 April 2007 March 2007 February 2007 January 2007 December 2006 November 2006 October 2006 September 2006 August 2006 February 2006 November 2005 October 2005 September 2005 March 2005 February 2005 January 2005 December 2004 October 2004 March 2004

### Meta

-   [Log in](https://blog.archive.org/wp-login.php)
-   [Entries feed](https://blog.archive.org/feed/)
-   [Comments feed](https://blog.archive.org/comments/feed/)
-   [WordPress.org](https://wordpress.org/)

<a href="https://wordpress.org/" class="imprint" title="Semantic Personal Publishing Platform">Proudly powered by WordPress</a>
