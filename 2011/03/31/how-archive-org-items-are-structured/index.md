[Internet Archive Blogs](http://blog.archive.org/ "Internet Archive Blogs")
===========================================================================

A blog from the team at archive.org
-----------------------------------

[<img src="http://blog.archive.org/wp-content/uploads/2021/07/blog-header-02-lines-1.png" alt="Internet Archive Blogs" class="header-image" width="4108" height="864" />](https://anniversary.archive.org "Celebrate our 25th anniversary with us.")

Menu

<a href="#content" class="assistive-text" title="Skip to content">Skip to content</a>

-   <span id="menu-item-7707">[Blog](https://blog.archive.org)</span>
-   <span id="menu-item-3417">[Announcements](http://blog.archive.org/category/announcements/)</span>
-   <span id="menu-item-7359">[25th Anniversary](https://anniversary.archive.org)</span>
-   <span id="menu-item-3422">[archive.org](https://archive.org)</span>
-   <span id="menu-item-3421">[About](http://blog.archive.org/about/)</span>
-   <span id="menu-item-15173">[Events](http://blog.archive.org/category/event/)</span>
-   <span id="menu-item-8100">[Developers](http://blog.archive.org/developers/)</span>
-   <span id="menu-item-15172">[Donate](http://archive.org/donate)</span>

How Archive.org items are structured
====================================

Posted on [March 31, 2011](http://blog.archive.org/2011/03/31/how-archive-org-items-are-structured/ "4:59 am")<span class="by-author"> by <span class="author vcard"><a href="http://blog.archive.org/author/wayback/" class="url fn n" title="View all posts by Alexis Rossi">Alexis Rossi</a></span></span>

**What is an item?**

An item is a logical “thing” that we present on one web page on archive.org. An item may be one video file along with scans of the DVD cover, one book, one audio file, or a set of audio files that represent a CD , etc.

How do you know whether your files should be in one item or separate items?  You get one metadata file per item.  If the same metadata describes ALL of the files (like a CD), then that’s one item.  If the files are too different to have the same metadata (title, creator, description, etc.), they should be in different items.

**How Items Are Structured**

All archive.org items have this format URL:  
**http://archive.org/details/<span style="color: #800080;">\[identifier\] </span>**  
(where \[identifier\] is unique within our system).

> Example: For this item  
> <a href="http://www.archive.org/details/popeye_taxi-turvey" class="uri">http://www.archive.org/details/popeye_taxi-turvey</a>  
> the identifier is **popeye\_taxi-turvey**

An item is just a directory or folder of files that includes the originally uploaded content file(s) – audio, video, text, etc. – along with any derivative files we create from the originals and the metadata that describes the item.  To see all files in an item, click the HTTP link in the upper left box on the item page (circled in red below).

<img src="http://blog.archive.org/wp-content/uploads/2011/03/HTTPlink.png" title="HTTP link" class="aligncenter size-full wp-image-3003" sizes="(max-width: 693px) 100vw, 693px" srcset="http://blog.archive.org/wp-content/uploads/2011/03/HTTPlink.png 693w, http://blog.archive.org/wp-content/uploads/2011/03/HTTPlink-300x244.png 300w" width="693" height="564" />

That link takes you to a directory listing showing all original, derived, and metadata files for the item.

<img src="http://blog.archive.org/wp-content/uploads/2011/03/Screen-shot-2011-04-05-at-11.44.38-AM.png" title="Directory listing" class="aligncenter size-full wp-image-3005" sizes="(max-width: 728px) 100vw, 728px" srcset="http://blog.archive.org/wp-content/uploads/2011/03/Screen-shot-2011-04-05-at-11.44.38-AM.png 728w, http://blog.archive.org/wp-content/uploads/2011/03/Screen-shot-2011-04-05-at-11.44.38-AM-300x99.png 300w" width="728" height="241" />

You can view information about every file in this directory by viewing the file ending in \_files.xml (in this example, popeye\_taxi-turvey\_files.xml). Each file in the item is listed here, along with whether the source is “original” (uploaded by the user), “derivative” (derived by archive.org), or “metadata” file.  You will also find a format designation, various checksums, and sometimes titles for the files.

<img src="http://blog.archive.org/wp-content/uploads/2011/03/Screen-shot-2011-04-05-at-11.57.39-AM.png" title="files.xml" class="aligncenter size-full wp-image-3010" sizes="(max-width: 512px) 100vw, 512px" srcset="http://blog.archive.org/wp-content/uploads/2011/03/Screen-shot-2011-04-05-at-11.57.39-AM.png 512w, http://blog.archive.org/wp-content/uploads/2011/03/Screen-shot-2011-04-05-at-11.57.39-AM-293x300.png 293w" width="512" height="523" />

To see all of the metadata for the item, view the file ending in \_meta.xml (in this example, popeye\_taxi-turvey\_meta.xml). This file should list all of the pertinent information about the item, such as title, creator, description, etc.  IA’s metadata schema is based on Dublin Core, but it is extremely flexible.  You can add any key=value pair to this file and we will store it and make it searchable in the IA search engine.  (However, it may not automatically show up on the item page.)

<img src="http://blog.archive.org/wp-content/uploads/2011/03/Screen-shot-2011-04-05-at-11.59.31-AM.png" title="meta.xml" class="aligncenter size-full wp-image-3011" sizes="(max-width: 496px) 100vw, 496px" srcset="http://blog.archive.org/wp-content/uploads/2011/03/Screen-shot-2011-04-05-at-11.59.31-AM.png 496w, http://blog.archive.org/wp-content/uploads/2011/03/Screen-shot-2011-04-05-at-11.59.31-AM-300x166.png 300w" width="496" height="276" />

Reviews, if there are any, are contained in the \_reviews.xml file.

One thing to note: Many “display” characteristics on archive.org, among other things, work better if your item’s identifier matches your file name.  So if you’re uploading a file called popeye\_taxi-turvey.mpg, it’s best to use the identifier popeye\_taxi-turvey (just remove the file extension).  If you’re using the upload button on archive.org, put your desired identifier in the Title field of the upload form.  We turn that into the identifier automatically, and then after upload you can go back into the item and change the title to something more readable.

**Archival URLs**

An item’s “details” page will always be available at  
<span style="color: #800080;">http://archive.org/**details**/\[identifier\] </span>

The item directory is always available at  
<span style="color: #800080;">http://archive.org/**download**/\[identifier\]  
</span>

A particular file can always be downloaded from  
<span style="color: #800080;">http://archive.org/**download**/\[identifier\]/\[filename\]</span>

Please Note: Archival URLs may redirect to an actual server that contains the content.  For example  
http://www.archive.org/download/popeye\_taxi-turvey  
currently redirects to  
http://ia600204.us.archive.org/14/items/popeye\_taxi-turvey/  
DO NOT LINK to any archive.org URL that begins with numbers like this.  This refers to the particular machine that we’re serving the file from right now, but we move items to new servers all the time.  If you link to this sort of URL, instead of the archival URL, your link WILL break at some point.

Posted in [Technical](http://blog.archive.org/category/technical/) | <span class="comments-link">[7 Replies](http://blog.archive.org/2011/03/31/how-archive-org-items-are-structured/#comments)</span>

### Post navigation

<span class="nav-previous">[<span class="meta-nav">←</span> The Real Mad Men](http://blog.archive.org/2011/03/30/the-real-mad-men/)</span> <span class="nav-next">[Digitizing Balinese Lontars <span class="meta-nav">→</span>](http://blog.archive.org/2011/04/14/digitizing-balinese-lontars/)</span>

7 thoughts on “How Archive.org items are structured”
----------------------------------------------------

1.  <span id="li-comment-13697"><img src="http://0.gravatar.com/avatar/033f7b91e5db5de93482974157ba75d5?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/033f7b91e5db5de93482974157ba75d5?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Lars Aronsson** [April 18, 2011 at 4:40 pm](http://blog.archive.org/2011/03/31/how-archive-org-items-are-structured/#comment-13697)</span> It’s sad that the Internet Archive doesn’t provide any structure for series or collections of items. Defining such a structure is a lot of work, and it’s sad that it can’t be shared with other visitors of the Internet Archive.

    One example is my identification of the series and volumes of the Transactions of the Swedish Academy, which now resides on Wikimedia Commons instead of the Internet Archive, <a href="http://commons.wikimedia.org/wiki/Category_talk:Svenska_Akademiens_handlingar" class="uri">http://commons.wikimedia.org/wiki/Category_talk:Svenska_Akademiens_handlingar</a>

    1.  <span id="li-comment-15747"><img src="http://0.gravatar.com/avatar/9dbd31625bbfd231e6ee9fcf8ca345ec?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/9dbd31625bbfd231e6ee9fcf8ca345ec?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**internetarchive** [May 3, 2011 at 11:55 pm](http://blog.archive.org/2011/03/31/how-archive-org-items-are-structured/#comment-15747)</span> Hi Lars,

        Archive.org currently has more than 8,000 collections of items. Here is an example: <a href="http://www.archive.org/details/harvardclassics" class="uri">http://www.archive.org/details/harvardclassics</a>

        If you are interested in having a collection on archive.org, you can contact us for further information at info at archive dot org.

        Alexis

2.  <span id="li-comment-13772"><img src="http://2.gravatar.com/avatar/8158a74302cdcc4dc668760470ce51be?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/8158a74302cdcc4dc668760470ce51be?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://akfoerster.de/en" class="url">Andreas K. Förster</a>** [April 19, 2011 at 2:41 pm](http://blog.archive.org/2011/03/31/how-archive-org-items-are-structured/#comment-13772)</span> Feature request: There should be a way to link items with each other. For example alternative recordings, or book scans with the LibriVox audio-book and so on.  
    The linked item should automatically be linked back.

    I hope this was the right place to post such ideas…

    1.  <span id="li-comment-15749"><img src="http://0.gravatar.com/avatar/9dbd31625bbfd231e6ee9fcf8ca345ec?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/9dbd31625bbfd231e6ee9fcf8ca345ec?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**internetarchive** [May 4, 2011 at 12:29 am](http://blog.archive.org/2011/03/31/how-archive-org-items-are-structured/#comment-15749)</span> Hi Andreas,

        I agree, that’s a great idea! We have a way to link collection pages to other related collections, but we currently don’t have a way to link items to one another (other than the user including an html link in their description, of course). As our collections grow, I think having this feature will become increasingly important – even just being able to link all the different editions/languages of a book together would be nice. I’ll make sure the team is aware of this request, though I can’t make any promises about delivery.

        Alexis

3.  Pingback: <a href="http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/" class="url">Downloading in bulk using wget | Internet Archive Blogs</a>

4.  <span id="li-comment-305608"><img src="http://2.gravatar.com/avatar/bcb3171055f0de91c76ff75891e92871?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/bcb3171055f0de91c76ff75891e92871?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Jason Henderson** [December 19, 2013 at 9:52 pm](http://blog.archive.org/2011/03/31/how-archive-org-items-are-structured/#comment-305608)</span> I am wondering: Is there a way to change out the main file (Say a PDF file) and then have Internet archive update the derivative files associated with that original file? I find I am needing to make corrections to previously created items, but in order to ensure the derivative files correspond I have had to completely delete the item and reupload.

    1.  <span id="li-comment-305795"><img src="http://0.gravatar.com/avatar/9dbd31625bbfd231e6ee9fcf8ca345ec?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/9dbd31625bbfd231e6ee9fcf8ca345ec?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**internetarchive** [December 20, 2013 at 10:48 pm](http://blog.archive.org/2011/03/31/how-archive-org-items-are-structured/#comment-305795)</span> Hi Jason,

        You can do this, but it’s a tad convoluted.

        1.  Click “edit item” link on your item, click “change the files”  
        2.  Remove the original file and all the derived files  
        3.  Upload a replacement file and click “Update item”  
        4.  On item page, click “edit item” &gt; “change the information” &gt; “item manager”  
        5.  Click the “derive” button

        It will take a little while for the derive to finish, depending on the size of your original file, but that should do it!

Comments are closed.

<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fblog.archive.org%2F2011%2F03%2F31%2Fhow-archive-org-items-are-structured" class="shareitem"><img src="http://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/facebook-icon.png" alt="Share to Facebook" /></a> <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fblog.archive.org%2F2011%2F03%2F31%2Fhow-archive-org-items-are-structured&amp;via=internetarchive&amp;text=How+Archive.org+items+are+structured" class="shareitem"><img src="http://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/twitter-icon.png" alt="Share to Twitter" /></a>

Search for:

### Recent Posts

-   [Turns Out It’s Not the Technology, It’s the People](http://blog.archive.org/2021/10/22/turns-out-its-not-the-technology-its-the-people/)
-   [LaTurbo Avedon’s Hypertext Wishes](http://blog.archive.org/2021/10/21/laturbo-hypertextwishes/)
-   [Celebrating Kanta Kapoor: 2021 Internet Archive Hero Award Recipient](http://blog.archive.org/2021/10/20/celebrating-kanta-kapoor-2021-internet-archive-hero-award-recipient/)
-   [Celebrating Lisa Radha Weaver: 2021 Internet Archive Hero Award Recipient](http://blog.archive.org/2021/10/20/celebrating-lisa-radha-weaver-2021-internet-archive-hero-award-recipient/)
-   [Olia Lialina gives good wishes with her artwork Perpetual Calendar](http://blog.archive.org/2021/10/20/olia-lialina-gives-good-wishes-with-her-artwork-perpetual-calendar/)

### Recent Comments

-   <span class="comment-author-link"><a href="https://gisomusic.com/" class="url">giso</a></span> on [Turns Out It’s Not the Technology, It’s the People](http://blog.archive.org/2021/10/22/turns-out-its-not-the-technology-its-the-people/#comment-412129)
-   <span class="comment-author-link"><a href="https://violinmusics.com/" class="url">آهنگ جدید</a></span> on [Turns Out It’s Not the Technology, It’s the People](http://blog.archive.org/2021/10/22/turns-out-its-not-the-technology-its-the-people/#comment-412119)
-   <span class="comment-author-link">Madhulika</span> on [Celebrating Kanta Kapoor: 2021 Internet Archive Hero Award Recipient](http://blog.archive.org/2021/10/20/celebrating-kanta-kapoor-2021-internet-archive-hero-award-recipient/#comment-412050)
-   <span class="comment-author-link"><a href="https://librarycognizance.blogspot.com/" class="url">Rangoli Awasthi</a></span> on [Librarians Kanta Kapoor and Lisa Radha Weaver to Receive 2021 Internet Archive Hero Award](http://blog.archive.org/2021/10/13/librarians-kanta-kapoor-and-lisa-radha-weaver-to-receive-internet-archive-hero-award-2021/#comment-412047)
-   <span class="comment-author-link">Kanta Kapoor</span> on [Celebrating Kanta Kapoor: 2021 Internet Archive Hero Award Recipient](http://blog.archive.org/2021/10/20/celebrating-kanta-kapoor-2021-internet-archive-hero-award-recipient/#comment-412032)

### Categories

-   [78rpm](http://blog.archive.org/category/audio-archive/78rpm/)
-   [Announcements](http://blog.archive.org/category/announcements/)
-   [Archive Version 2](http://blog.archive.org/category/archive-version-2/)
-   [Archive-It](http://blog.archive.org/category/archive-it/)
-   [Audio Archive](http://blog.archive.org/category/audio-archive/)
-   [Books Archive](http://blog.archive.org/category/books-archive/)
-   [Cool items](http://blog.archive.org/category/cool-items/)
-   [Education Archive](http://blog.archive.org/category/education-archive/)
-   [Emulation](http://blog.archive.org/category/emulation/)
-   [Event](http://blog.archive.org/category/event/)
-   [Image Archive](http://blog.archive.org/category/image-archive/)
-   [Jobs](http://blog.archive.org/category/jobs/)
-   [Lending Books](http://blog.archive.org/category/books-archive/lending-books/)
-   [Live Music Archive](http://blog.archive.org/category/live-music-archive-2/)
-   [Movie Archive](http://blog.archive.org/category/movie-archive/)
-   [Music](http://blog.archive.org/category/music/)
-   [News](http://blog.archive.org/category/news/)
-   [Newsletter](http://blog.archive.org/category/newsletter/)
-   [Open Library](http://blog.archive.org/category/open-library/)
-   [Past Event](http://blog.archive.org/category/event/past-event/)
-   [Software Archive](http://blog.archive.org/category/software-archive/)
-   [Technical](http://blog.archive.org/category/technical/)
-   [Television Archive](http://blog.archive.org/category/television-archive/)
-   [Upcoming Event](http://blog.archive.org/category/event/upcoming-event/)
-   [Video Archive](http://blog.archive.org/category/video-archive/)
-   [Wayback Machine – Web Archive](http://blog.archive.org/category/wayback-machine/)
-   [Web & Data Services](http://blog.archive.org/category/web-data-services/)

### Archives

Archives Select Month October 2021 September 2021 August 2021 July 2021 June 2021 May 2021 April 2021 March 2021 February 2021 January 2021 December 2020 November 2020 October 2020 September 2020 August 2020 July 2020 June 2020 May 2020 April 2020 March 2020 February 2020 January 2020 December 2019 November 2019 October 2019 September 2019 August 2019 July 2019 June 2019 May 2019 April 2019 March 2019 February 2019 January 2019 December 2018 November 2018 October 2018 September 2018 August 2018 July 2018 June 2018 May 2018 April 2018 March 2018 February 2018 January 2018 December 2017 November 2017 October 2017 September 2017 August 2017 July 2017 June 2017 May 2017 April 2017 March 2017 February 2017 January 2017 December 2016 November 2016 October 2016 September 2016 August 2016 July 2016 June 2016 May 2016 April 2016 March 2016 February 2016 January 2016 December 2015 November 2015 October 2015 September 2015 July 2015 June 2015 May 2015 April 2015 March 2015 February 2015 January 2015 December 2014 November 2014 October 2014 September 2014 August 2014 July 2014 June 2014 May 2014 April 2014 March 2014 February 2014 January 2014 December 2013 November 2013 October 2013 September 2013 August 2013 July 2013 June 2013 May 2013 April 2013 March 2013 February 2013 January 2013 December 2012 November 2012 October 2012 September 2012 August 2012 July 2012 June 2012 May 2012 April 2012 March 2012 February 2012 January 2012 December 2011 November 2011 October 2011 September 2011 August 2011 July 2011 June 2011 May 2011 April 2011 March 2011 February 2011 January 2011 December 2010 November 2010 October 2010 September 2010 August 2010 July 2010 June 2010 May 2010 April 2010 March 2010 February 2010 January 2010 December 2009 October 2009 September 2009 August 2009 July 2009 June 2009 May 2009 April 2009 March 2009 February 2009 January 2009 December 2008 November 2008 September 2008 August 2008 June 2008 May 2008 April 2008 March 2008 February 2008 January 2008 December 2007 October 2007 September 2007 August 2007 July 2007 June 2007 May 2007 April 2007 March 2007 February 2007 January 2007 December 2006 November 2006 October 2006 September 2006 August 2006 February 2006 November 2005 October 2005 September 2005 March 2005 February 2005 January 2005 December 2004 October 2004 March 2004

### Meta

-   [Log in](http://blog.archive.org/wp-login.php)
-   [Entries feed](http://blog.archive.org/feed/)
-   [Comments feed](http://blog.archive.org/comments/feed/)
-   [WordPress.org](https://wordpress.org/)

<a href="https://wordpress.org/" class="imprint" title="Semantic Personal Publishing Platform">Proudly powered by WordPress</a>
