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

Presetting metadata with the new Beta Uploader
==============================================

Posted on [February 8, 2013](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/ "1:26 am")<span class="by-author"> by <span class="author vcard"><a href="http://blog.archive.org/author/raj/" class="url fn n" title="View all posts by raj">raj</a></span></span>

We have been testing out a [new uploader](http://archive.org/upload), currently in beta. The new uploader allows our users to preset metadata for their items, which is useful if you are uploading many items.

When using the new uploader, the metadata editor will appear after initially choosing some files to upload, as shown below:

[<img src="http://blog.archive.org/wp-content/uploads/2013/02/upload_step1-300x188.png" title="upload_step1" class="alignnone size-medium wp-image-5848" sizes="(max-width: 300px) 100vw, 300px" srcset="http://blog.archive.org/wp-content/uploads/2013/02/upload_step1-300x188.png 300w, http://blog.archive.org/wp-content/uploads/2013/02/upload_step1.png 896w" width="300" height="188" />](http://blog.archive.org/wp-content/uploads/2013/02/upload_step1.png)[<img src="http://blog.archive.org/wp-content/uploads/2013/02/upload_step2-300x176.png" title="upload_step2" class="alignnone size-medium wp-image-5849" sizes="(max-width: 300px) 100vw, 300px" srcset="http://blog.archive.org/wp-content/uploads/2013/02/upload_step2-300x176.png 300w, http://blog.archive.org/wp-content/uploads/2013/02/upload_step2.png 882w" width="300" height="176" />](http://blog.archive.org/wp-content/uploads/2013/02/upload_step2.png)

You will not see the metadata editor until you choose at least one file. You can add query arguments to the standard upload URL in order to preset metadata for the item. When the metadata editor appears, it will be populated with the metadata you supplied. You can preset standard metadata fields like title and description, as well as arbitrary key/value pairs.  The general form of the url will look like this:

<span style="color: #000000;">http://archive.org/upload</span><span style="color: #ff0000;">?</span><span style="color: #339966;">key1=value1</span><span style="color: #ff0000;">&</span><span style="color: #3366ff;">key2=value2</span>

An advantage to specifying metadata in this way is that it can then be searched on archive.org by putting   key1:value AND key2:value2     or key1:”Multiple word value”   The metadata is stored in the item’s metadata xml file located at: http://archive.org/download/ID/ID\_meta.xml.

Here are some examples:

**Title**

This url will preset the title for you:

<a href="http://archive.org/upload/?title=My%20Item" class="uri">http://archive.org/upload/?title=My%20Item</a>

Note that the space character in the title is encoded as “%20”

**Description**

<a href="http://archive.org/upload/?description=This%20is%20my%20description" class="uri">http://archive.org/upload/?description=This%20is%20my%20description</a>

**Subjects**

Subjects are separated by commas:

<a href="http://archive.org/upload/?subject=dogs,cats" class="uri">http://archive.org/upload/?subject=dogs,cats</a>

**Page URL / Item Identifier**

Presetting the page url is tricky, since you must pick a unique identifier for your item. If you provide an identifier that already exists, the uploader will allow you to add more files to that item, assuming you have the correct permissions to upload to that item.

http://archive.org/upload/?identifier=this\_item\_does\_not\_exist\_yet

**Limiting identifier length**

If you need to limit the length of the identifier, you can set max\_id\_length. This is useful if you need the identifier to be short enough to fit on a barcode.

http://archive.org/upload/?max\_id\_length=25

**Collection**

Presetting the collection will only be useful to curators who have permissions to upload to those collections:

http://archive.org/upload/?collection=americana,test\_collection

Here, two collections are supplied, separated by a comma. The primary collection is listed first, and will appear in the “Collection” section of the metadata editor. Additional collections will appear at the bottom of the editor, in the “More Options” section.

**Arbitrary Metadata**

You can supply any additional metadata you would like to add to your item. If the key/value pair you supply is not one of the standard ones, it will appear at the bottom of the metadata editor, in the “More Options” section:

http://archive.org/upload/?foo=bar

Please let us know if you have any comments about the new uploader!

 

Posted in [News](http://blog.archive.org/category/news/) | <span class="comments-link">[16 Replies](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comments)</span>

### Post navigation

<span class="nav-previous">[<span class="meta-nav">←</span> new archive.org uploader: html5, for big big files, and easier (but not for IE)](http://blog.archive.org/2013/01/29/new-archive-org-uploader-html5-for-big-big-files-and-easier-but-not-for-ie/)</span> <span class="nav-next">[Browser distribution for those using Archive.org <span class="meta-nav">→</span>](http://blog.archive.org/2013/02/09/browser-distribution-for-those-using-archive-org/)</span>

16 thoughts on “Presetting metadata with the new Beta Uploader”
---------------------------------------------------------------

1.  <span id="li-comment-254629"><img src="http://2.gravatar.com/avatar/eccd85ad4be3d50b15490cfaf4c348c2?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/eccd85ad4be3d50b15490cfaf4c348c2?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://accesshumboldt.net" class="url">John Hauser</a>** [February 13, 2013 at 5:22 am](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-254629)</span> Thanks, Raj for this bit of documentation! I’ll point folks at community media centers who ask about how to use the new uploader to this blog post. I believe many of them will want to assign metadata using the URL and it’s easier to show an example without having to include a bunch of screenshots…

2.  <span id="li-comment-255132"><img src="http://1.gravatar.com/avatar/148ac3894b7b68815d757f90c9de258e?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://1.gravatar.com/avatar/148ac3894b7b68815d757f90c9de258e?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://www.damer.com" class="url">Bruce Damer</a>** [February 18, 2013 at 9:31 am](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-255132)</span> Hi folks I have tried every combination I could think of to set the license, how do you do it? licenseurl=? or license=? I am trying to set to creative commons noncommercial share alike etc.

    1.  <span id="li-comment-255294"><img src="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**raj** Post author[February 19, 2013 at 1:37 am](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-255294)</span> Setting the license is a little difficult right now. Currently you need to use licenseurl and ignore the license picker in order to preset the license. Your licenseurl will show at the bottom of the metadata form in the “More Options” section. For CC noncommercial share-alike you would use:

        <a href="http://archive.org/upload/?licenseurl=http://creativecommons.org/licenses/by-nc-sa/3.0/" class="uri">http://archive.org/upload/?licenseurl=http://creativecommons.org/licenses/by-nc-sa/3.0/</a>

        1.  <span id="li-comment-255411"><img src="http://2.gravatar.com/avatar/5c12d307bbef0ad4c4340a12322b4a8b?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/5c12d307bbef0ad4c4340a12322b4a8b?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://www.damer.com" class="url">Bruce Damer</a>** [February 19, 2013 at 4:51 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-255411)</span> Works, so if the URL is set in the More Options section when I post it will select the correct license? Another question: how do you set language? I tried  
            language=eng  
            and  
            language=english  
            but it defaults to the More Options field not setting the actual field.

            1.  <span id="li-comment-255420"><img src="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**raj** Post author[February 19, 2013 at 6:11 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-255420)</span> Yes, if you set licenseurl in the More Options section, then your item will have the correct license set. We are working on making presetting the license easier to use.

                As you have noticed, presetting the language is also a bit tricky right now, and it shows up in the More Options section as well (just ignore the language section for now). We use three-letter MARC language codes. Here is the URL to preset language to English:

                <a href="http://archive.org/upload/?language=eng" class="uri">http://archive.org/upload/?language=eng</a>

3.  <span id="li-comment-255133"><img src="http://1.gravatar.com/avatar/148ac3894b7b68815d757f90c9de258e?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://1.gravatar.com/avatar/148ac3894b7b68815d757f90c9de258e?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://www.damer.com" class="url">Bruce Damer</a>** [February 18, 2013 at 9:33 am](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-255133)</span> Another question, how does one include special characters in the query items, for example the “\#” or “&” symbol, is there some kind of escape character that will permit this? So I could set: description=Dr.Bruce’s%20Podcast%20\#005

    For Dr.Bruce’s Podcast \#005

    1.  <span id="li-comment-255295"><img src="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**raj** Post author[February 19, 2013 at 1:39 am](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-255295)</span> You can percent-escape symbols:

        Your percent-escaped string is: Dr.Bruce%27s%20Podcast%20%23005

        And the upload url would be:  
        <a href="http://archive.org/upload/?description=Dr.Bruce%27s%20Podcast%20%23005" class="uri">http://archive.org/upload/?description=Dr.Bruce%27s%20Podcast%20%23005</a>

4.  <span id="li-comment-255404"><img src="http://2.gravatar.com/avatar/5c12d307bbef0ad4c4340a12322b4a8b?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/5c12d307bbef0ad4c4340a12322b4a8b?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://www.damer.com" class="url">Bruce Damer</a>** [February 19, 2013 at 4:23 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-255404)</span> Thanks Raj!

5.  <span id="li-comment-271642"><img src="http://1.gravatar.com/avatar/4525b559a2de271c220f1af32f329e6f?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://1.gravatar.com/avatar/4525b559a2de271c220f1af32f329e6f?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://listeruptionz.com" class="url">Bang Luu Van</a>** [May 6, 2013 at 5:22 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-271642)</span> Thank Raj for share! I’ll point folks at community media centers who ask about how to use the new up-loader to this blog post. I believe many of them will want to assign metadata using the URL and it’s easier to show an example without having to include a bunch of screenshots…  
    Regards,  
    Bang Luu Van

6.  <span id="li-comment-272011"><img src="http://0.gravatar.com/avatar/c96f9c81f77f59fd07a2fd60e69bedd2?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/c96f9c81f77f59fd07a2fd60e69bedd2?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**cour43** [May 9, 2013 at 10:10 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-272011)</span> Hello

    How to add “Subject Tags” in the url ?

    Thanks

7.  <span id="li-comment-272072"><img src="http://0.gravatar.com/avatar/c96f9c81f77f59fd07a2fd60e69bedd2?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/c96f9c81f77f59fd07a2fd60e69bedd2?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**cour43** [May 10, 2013 at 2:28 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-272072)</span> ok i reply myself it’s

    <a href="http://archive.org/upload/?subject=My" class="uri">http://archive.org/upload/?subject=My</a> Keywords

8.  <span id="li-comment-284374"><img src="http://0.gravatar.com/avatar/c13f5d1496d838ca922a868c4695671c?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/c13f5d1496d838ca922a868c4695671c?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Lyn** [August 11, 2013 at 3:11 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-284374)</span> I added “book contributor” and “call number” to the ‘more options’ metadata fields … and received an ‘invalid metadata key’ error, but my keys have lower case letters, etc. What is the trick?

    1.  <span id="li-comment-284528"><img src="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**raj** Post author[August 12, 2013 at 5:44 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-284528)</span> Hi, for books, the contributor should be in a “contributor” field, and call number should be in a “call\_number” field.

        The invalid metadata key error you saw was due to a space in “book contributor”.

        Here is an example of a book with both contributor and call\_number set: <a href="https://archive.org/details/birdbookillustra00reedrich" class="uri">https://archive.org/details/birdbookillustra00reedrich</a>

9.  <span id="li-comment-325300"><img src="http://1.gravatar.com/avatar/dfff3f9590d6b2a1f52a1fc1c0ef7caf?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://1.gravatar.com/avatar/dfff3f9590d6b2a1f52a1fc1c0ef7caf?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://www.radionerds.com" class="url">Chris Story</a>** [January 30, 2014 at 10:31 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-325300)</span> What about a predefined metafile? something named the same as the target file, but .xml? This way we can pre-process huge amounts of information then the uploader can grab the details for each file from this file while processing on the server side?

    unless there is something quicker for 1000+ files?

    1.  <span id="li-comment-328957"><img src="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/2fd208ca8aab882ac78159a7067f3bcc?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**raj** Post author[February 12, 2014 at 9:52 am](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-328957)</span> For programatic upload of large numbers of files, you can use the [IA S3 API](http://archive.org/help/abouts3.txt) or the [\`ia\` command-line tool](https://pypi.python.org/pypi/internetarchive).

10. <span id="li-comment-332691"><img src="http://1.gravatar.com/avatar/4201ef9392e15818be0408d72af947f3?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://1.gravatar.com/avatar/4201ef9392e15818be0408d72af947f3?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Lee** [February 20, 2014 at 5:46 pm](http://blog.archive.org/2013/02/08/presetting-metadata-with-the-new-beta-uploader/#comment-332691)</span> metadata for dummies PLEASE. I have no idea what it is and what has to be filled in. HELP

Comments are closed.

<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fblog.archive.org%2F2013%2F02%2F08%2Fpresetting-metadata-with-the-new-beta-uploader" class="shareitem"><img src="http://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/facebook-icon.png" alt="Share to Facebook" /></a> <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fblog.archive.org%2F2013%2F02%2F08%2Fpresetting-metadata-with-the-new-beta-uploader&amp;via=internetarchive&amp;text=Presetting+metadata+with+the+new+Beta+Uploader" class="shareitem"><img src="http://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/twitter-icon.png" alt="Share to Twitter" /></a>

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
