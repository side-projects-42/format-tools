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

The Internet Archive Metadata API
=================================

Posted on [July 4, 2013](http://blog.archive.org/2013/07/04/metadata-api/ "12:08 am")<span class="by-author"> by <span class="author vcard"><a href="http://blog.archive.org/author/internetarchive/" class="url fn n" title="View all posts by jeff kaplan">jeff kaplan</a></span></span>

The Metadata API is intended for fast, flexible, and reliable [reading](#read "Metadata Read API") and [writing](#write "Metadata Write API") of Internet Archive items.

<span id="read"></span>Metadata Read API
========================================

The Metadata Read API is the fastest and most flexible way to retrieve metadata for items on archive.org. We’ve seen upwards of 500 reads per second for some collections!

Overview
--------

Returns all of an item’s metadata in JSON.

### Resource URL

    http://archive.org/metadata/:identifier

### Parameters

**`identifier`**: The globally unique ID of a given item on archive.org.

Usage
-----

For example, **`frenchenglishmed00gorduoft`** is the **`identifier`** for <a href="http://archive.org/details/frenchenglishmed00gorduoft" class="uri">http://archive.org/details/frenchenglishmed00gorduoft</a>. You can retrieve all of this item’s metadata from the Metadata API using the following [curl](http://curl.haxx.se/) command:

    $ curl http://archive.org/metadata/frenchenglishmed00gorduoft

The Metadata API also supports HTTPS:

    $ curl https://archive.org/metadata/frenchenglishmed00gorduoft

### Sub-item Access

The Metadata API returns **all** of an item’s metadata by default. You can access specific metadata elements like so:

    http://archive.org/metadata/:identifier/metadata
    http://archive.org/metadata/:identifier/server
    http://archive.org/metadata/:identifier/files_count
    http://archive.org/metadata/:identifier/files?start=1&count=2
    http://archive.org/metadata/:identifier/metadata/collection
    http://archive.org/metadata/:identifier/metadata/collection/0
    http://archive.org/metadata/:identifier/metadata/title
    http://archive.org/metadata/:identifier/files/0/name

<span id="write"></span>Metadata Write API
==========================================

The metadata write API is intended to make changes to metadata timely, safe and flexible.  
It utilizes [version 02 of the JSON Patch standard](http://tools.ietf.org/html/draft-ietf-appsawg-json-patch-02).

Overview
--------

#### timely

-   Callers receive results (success or failure) immediately.
-   Changes are quickly reflected through the metadata read API.

#### safe

-   All writes pass through the catalog, so all changes are recorded.
-   All writes are checked before they’re submitted to the catalog.
-   If there’s a problem, no catalog task is created. Goal: no redrows!
-   All checks are repeated when the catalog task is executed.

#### flexible

-   Supports arbitrary changes to multiple metadata targets through a unified API.
-   Changes are easy — no string concatenation or libraries needed.

### Resource URL

    http://archive.org/metadata/:identifier

### Parameters

**`identifier`**: The globally unique ID of a given item on archive.org.

### Targets

The Metadata Write API supports three kinds of target:

**`metadata`**: Changes item\_meta.xml (e.g. `http://archive.org/metadata/:identifier/metadata`).  
**`files/:filename`**: Changes the file entry in the item’s files.xml (e.g. `http://archive.org/metadata/:identifier/files`).  
**`other`**: Changes other.json (e.g. `http://archive.org/metadata/:identifier/other`).

For XML targets (e.g. ‘`metadata`‘ and ‘`files`‘) patches should be composed against their JSON representation, as found in metadata read API results.

Usage
-----

As an HTTP post/get

    http://archive.org/metadata/:identifier

With the following url-encoded arguments:

**`-target`**: The metadata target you would like to modify.  
**`-patch`**: The patch you are submitting to the Metadata API.  
**`access`**: Your IA-S3 access key.  
**`secret`**: Your IA-S3 secret key.

### Authentication

**NOTE:** These calls must be made with appropriate authentication – at the moment, this means passing your Archive.org IA-S3 credentials. Please visit <a href="http://archive.org/account/s3.php" class="uri">http://archive.org/account/s3.php</a> to obtain your IA-S3 `access key` and `secret key`.

### Patches

Patches are JSON strings. They should comply to the draft Json-Patch standard:

<a href="http://tools.ietf.org/html/draft-ietf-appsawg-json-patch-02" class="uri">http://tools.ietf.org/html/draft-ietf-appsawg-json-patch-02</a>

Examples
--------

### Writing to an item’s meta.xml

Add ‘scan\_sponsor’ with value ‘Starfleet’ to target ‘metadata’ to the item `metadata_test_item`:

    #!/bin/bash
    ACCESS=<redacted>
    SECRET=<redacted>
    IDENTIFIER=metadata_test_item
    TARGET=metadata
    PATCH='{"add":"/scan_sponsor", "value":"Starfleet"}'

    curl --data-urlencode -target=$TARGET \
         --data-urlencode -patch="$PATCH" \
         --data-urlencode access=$ACCESS \
         --data-urlencode secret=$SECRET \
         http://archive.org/metadata/$IDENTIFIER

returns a JSON object, like the following:

    {"success":true,"task_id":114350522,"log":"http://www.us.archive.org/log_show.php?task_id=114350522″}

or perhaps

    {"error":"Some problem applying the patch"}

### writing to files.xml entry

    #!/bin/bash
    ACCESS=<redacted> 
    SECRET=<redacted>
    IDENTIFIER=metadata_test_item
    TARGET='files/glogo.png'
    PATCH='{"add":"/camera", "value":"Canon A150″}'

    curl --data-urlencode -target=$TARGET \
         --data-urlencode -patch="$PATCH" \
         --data-urlencode access=$ACCESS \
         --data-urlencode secret=$SECRET \
         http://archive.org/metadata/$IDENTIFIER

### Writing to metadata\_test\_item/foo\_client.json

**NOTE:** Keys and values are binary-safe and unrestricted

    #!/bin/bash
    ACCESS=<redacted> 
    SECRET=<redacted>
    IDENTIFIER=metadata_test_item
    TARGET='foo_client'
    PATCH='{"add":"/of concern to foo", "value":{"foo-ness":["buckle", "shoe"]}}'

    curl --data-urlencode -target=$TARGET \
         --data-urlencode -patch="$PATCH" \
         --data-urlencode access=$ACCESS \
         --data-urlencode secret=$SECRET \     
         http://archive.org/metadata/$IDENTIFIER

After the above call, a metadata read of `metadata_test_item` will have a toplevel member ‘foo\_client’ with value:

    {"foo-ness":["buckle", "shoe"]}

Posted in [Technical](http://blog.archive.org/category/technical/) | Tagged [api](http://blog.archive.org/tag/api/), [documentation](http://blog.archive.org/tag/documentation/), [metadata](http://blog.archive.org/tag/metadata/) | <span class="comments-link">[1 Reply](http://blog.archive.org/2013/07/04/metadata-api/#comments)</span>

### Post navigation

<span class="nav-previous">[<span class="meta-nav">←</span> Cost to Store All US Phonecalls Made in a Year in Cloud Storage so it could be Datamined](http://blog.archive.org/2013/06/15/cost-to-store-all-us-phonecalls-made-in-a-year-in-cloud-storage-so-it-could-be-datamined/)</span> <span class="nav-next">[How to use the Virtual Machine for Researchers <span class="meta-nav">→</span>](http://blog.archive.org/2013/07/04/how-to-use-the-virtual-machine-for-researchers/)</span>

1 thought on “The Internet Archive Metadata API”
------------------------------------------------

1.  Pingback: <a href="http://blog.archive.org/2013/07/04/how-to-use-the-virtual-machine-for-researchers/" class="url">How to use the Virtual Machine for Researchers | Internet Archive Blogs</a>

Comments are closed.

<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fblog.archive.org%2F2013%2F07%2F04%2Fmetadata-api" class="shareitem"><img src="http://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/facebook-icon.png" alt="Share to Facebook" /></a> <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fblog.archive.org%2F2013%2F07%2F04%2Fmetadata-api&amp;via=internetarchive&amp;text=The+Internet+Archive+Metadata+API" class="shareitem"><img src="http://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/twitter-icon.png" alt="Share to Twitter" /></a>

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
