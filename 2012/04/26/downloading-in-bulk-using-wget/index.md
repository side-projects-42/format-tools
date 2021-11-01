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

Downloading in bulk using wget
==============================

Posted on [April 26, 2012](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/ "1:28 am")<span class="by-author"> by <span class="author vcard"><a href="http://blog.archive.org/author/internetarchive/" class="url fn n" title="View all posts by jeff kaplan">jeff kaplan</a></span></span>

If you’ve ever wanted to download files from many different archive.org items in an automated way, here is one method to do it.

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

### <span style="color: #ff0000;">**Here’s an overview of what we’ll do:**</span>

1.  Confirm or install a terminal emulator and wget  
2.  Create a list of archive.org item identifiers  
3.  Craft a wget command to download files from those identifiers  
4.  Run the wget command.

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

### <span style="color: #ff0000;">**Requirements**</span>

Required: a terminal emulator and wget installed on your computer. Below are instructions to determine if you already have these.  
Recommended but not required: understanding of [basic unix commands](http://mally.stanford.edu/~sr/computing/basic-unix.html) and [archive.org items structure and terminology](http://blog.archive.org/2011/03/31/how-archive-org-items-are-structured/).

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

### **<span style="color: #ff0000;">Section 1. Determine if you have a terminal emulator and wget.</span> <span style="color: #ff0000;"> If not, they need to be installed (they’re free)</span>**

**1. Check to see if you already have wget installed**  
If you already have a terminal emulator such as Terminal (Mac) or Cygwin (Windows) you can check if you have wget also installed. If you do not have them both installed go to Section 2. Here’s how to check to see if you have wget using your terminal emulator:

1.  Open Terminal (Mac) or Cygwin (Windows)  
2.  Type “which wget” after the $ sign  
3.  If you have wget the result should show what directory it’s in such as /usr/bin/wget. If you don’t have it there will be no results.

**2**. **To install a terminal emulator and/or wget:**  
**Windows:** To install a terminal emulator along with wget please read [Installing Cygwin Tutorial](http://xahlee.info/mswin/installing_cygwin.html). Be sure to choose the wget module option when prompted.

**MacOSX:** MacOSX comes with Terminal installed. You should find it in the Utilities folder (Applications &gt; Utilities &gt; Terminal). For wget, there are no official binaries of wget available for Mac OS X. Instead, you must either build wget from source code or download an unofficial binary created elsewhere. The following links may be helpful for getting a working copy of wget on Mac OSX.  
[Prebuilt binary for Mac OSX Lion and Snow Leopard  
](http://www.techtach.org/wget-prebuilt-binary-for-mac-osx-lion)[wget for Mac OSX leopard](http://www.statusq.org/archives/2008/07/30/1954/)

**Building from source for MacOSX: Skip this step if you are able to install from the above links.**  
To build from source, you must first [Install Xcode](http://www.techtach.org/wget-prebuilt-binary-for-mac-osx-lion). Once Xcode is installed there are many tutorials online to guide you through building wget from source. Such as, [How to install wget on your Mac](http://www.hacksparrow.com/how-to-install-wget-on-your-mac.html).

### 

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

### <span style="color: #ff0000;">**Section 2. Now you can use wget to download lots of files**</span>

The method for using wget to download files is:

1.  Generate a list of archive.org item identifiers (the tail end of the url for an archive.org item page) from which you wish to grab files.
2.  Create a folder (a directory) to hold the downloaded files
3.  Construct your wget command to retrieve the desired files
4.  Run the command and wait for it to finish

\*\*\*\*Step 1: Create a folder (directory) for your downloaded files  
\*\*\*\*1. Create a folder named “Files” on your computer Desktop. This is where the downloaded where files will go. Create it the usual way by using either command-shift-n (Mac) or control-shift-n (Windows)

**<span id="generating_an_itemlist">Step 2: Create a file with the list of identifiers</span>**  
You’ll need a text file with the list of archive.org item identifiers from which you want to download files. This file will be used by the wget to download the files.

If you already have a list of identifiers you can paste or type the identifiers into a file. There should be one identifier per line. The other option is to use the archive.org search engine to create a list based on a query.  To do this we will use [advanced search](http://archive.org/advancedsearch.php) to create the list and then download the list in a file.

First, determine your search query using the search engine.  In this example, I am looking for items in the Prelinger collection with the subject “Health and Hygiene.”  There are currently 41 items that match [this query](http://archive.org/search.php?query=collection%3Aprelinger%20AND%20subject%3A%22Health%20and%20hygiene%22).  Once you’ve figured out your query:

1.  Go to the [advanced search page](http://archive.org/advancedsearch.php) on archive.org. Use the “Advanced Search returning JSON, XML, and more.” section to create a query.  Once you have a query that delivers the results you want click the back button to go back to the advanced search page.  
2.  Select “identifier” from the “Fields to return” list.  
3.  Optionally sort the results (sorting by “identifier asc” is handy for arranging them in alphabetical order.)  
4.  Enter the number of results from step 1 into the “Number of results” box that matches (or is higher than) the number of results your query returns.  
5.  Choose the “CSV format” radio button.  
    This image shows what the advance query would look like for our example:  
    <img src="http://blog.archive.org/wp-content/uploads/2012/04/advancedsearch.png" title="advancedsearch" alt="Advanced Search" width="759" height="485" />

6.  Click the search button (may take a while depending on how many results you have.) An alert box will ask if you want your results – click “OK” to proceed.  You’ll then see a prompt to download the “search.csv” file to your computer.  The downloaded file will be in your default download location (often your Desktop or your Downloads folder).  
7.  Rename the “search.csv” file “itemlist.txt” (no quotes.)  
8.  Drag or move the itemlist.txt file into your “Files” folder that you previously created  
9.  Open the file in a text program such as TextEdit (Mac) or Notepad (Windows). Delete the first line of copy which reads “identifier”. Be sure you deleted the entire line and that the first line is not a blank line. Now remove all the quotes by doing a search and replace replacing the ” with nothing.

The contents of the itemlist.txt file should now look like this:

    AboutFac1941
    Attitude1949
    BodyCare1948
    Cancer_2
    Careofth1949
    Careofth1951
    CityWate1941

<span style="color: #3366ff;">…………………………………………………………………………………………………………………………</span>  
<span style="color: #3366ff;"> NOTE: You can use this advanced search method to create lists of thousands of identifiers, although we don’t recommend using it to retrieve more than 10,000 or so items at once (it will time out at a certain point).</span>  
<span style="color: #3366ff;"> ………………………………………………………………………………………………………………………..</span>.

**Step 3:** **Create a wget command**  
The wget command uses unix terminology. Each symbol, letter or word represents different options that the wget will execute.

Below are three typical wget commands for downloading from the identifiers listed in your itemlist.txt file.

To get all files from your identifier list:`wget -r -H -nc -np -nH --cut-dirs=1 -e robots=off -l1 -i ./itemlist.txt -B 'http://archive.org/download/'`

If you want to only download certain file formats (in this example pdf and epub) you should include the -A option which stands for “accept”. In this example we would download the pdf and jp2 files`wget -r -H -nc -np -nH --cut-dirs=1 -A .pdf,.epub` -e robots=off -l1 -i ./itemlist.txt -B ‘http://archive.org/download/’

To only download all files except specific formats (in this example tar and zip) you should include the -R option which stands for “reject”. In this example we would download all files except tar and zip files:`wget -r -H -nc -np -nH --cut-dirs=1 -R .tar,.zip` -e robots=off`-l1`-i ./itemlist.txt -B ‘http://archive.org/download/’

If you want to modify one of these or craft a new one you may find it easier to do it in a text editing program (TextEdit or NotePad) rather than doing it in the terminal emulator.

<span style="color: #3366ff;">…………………………………………………………………………………………………………………………</span>  
<span style="color: #3366ff;"> NOTE: To craft a wget command for your specific needs you might need to understand the various options. It can get complicated so try to get a thorough understanding before experimenting.You can learn more about unix commands at [<span style="color: #3366ff;">Basic unix commands</span>](http://mally.stanford.edu/~sr/computing/basic-unix.html)</span>

<span style="color: #3366ff;">An explanation of each options used in our example wget command are as follows:</span>

<span style="color: #3366ff;">`-r`   recursive download; required in order to move from the item identifier down into its individual files\`\`</span>

<span style="color: #3366ff;">`-H`   enable spanning across hosts when doing recursive retrieving (the initial URL for the directory will be on archive.org, and the individual file locations will be on a specific datanode)</span>

<span style="color: #3366ff;">`-nc`   no clobber; if a local copy already exists of a file, don’t download it again (useful if you have to restart the wget at some point, as it avoids re-downloading all the files that were already done during the first pass)</span>

<span style="color: #3366ff;">`-np`   no parent; ensures that the recursion doesn’t climb back **up** the directory tree to other items (by, for instance, following the “../” link in the directory listing)</span>

<span style="color: #3366ff;">`-nH`   no host directories; when using `-r`, wget will create a directory tree to stick the local copies in, starting with the hostname ({datanode}.us.archive.org/), unless -nH is provided</span>

<span style="color: #3366ff;">`--cut-dirs=1`   completes what -nH started by skipping the hostname; when saving files on the local disk (from a URL like[<span style="color: #3366ff;">http://{datanode}.us.archive.org/{drive}/items/{identifier}/{identifier}.pdf</span>](http://%7Bdatanode%7D.us.archive.org/%7Bdrive%7D/items/%7Bidentifier%7D/%7Bidentifier%7D.pdf)), skip the /{drive}/items/ portion of the URL, too, so that all {identifier} directories appear together in the current directory, instead of being buried several levels down in multiple {drive}/items/ directories</span>

<span style="color: #3366ff;">`-e robots=off`   archive.org datanodes contain robots.txt files telling robotic crawlers not to traverse the directory structure; in order to recurse from the directory to the individual files, we need to tell wget to ignore the robots.txt directive</span>

<span style="color: #3366ff;">`-i ../itemlist.txt`   location of input file listing all the URLs to use; “../itemlist” means the list of items should appear one level up in the directory structure, in a file called “itemlist.txt” (you can call the file anything you want, so long as you specify its actual name after -i)</span>

<span style="color: #3366ff;">`-B 'http://archive.org/download/'`   base URL; gets prepended to the text read from the -i file (this is what allows us to have just the identifiers in the itemlist file, rather than the full URL on each line)</span>

<span style="color: #3366ff;">Additional options that may be needed sometimes:</span>

<span style="color: #3366ff;">`-l depth --level=depth`   Specify recursion maximum depth level depth. The default maximum depth is 5. This option is helpful when you are downloading items that contain external links or URL’s in either the items metadata or other text files within the item. Here’s an example command to avoid downloading external links contained in an items metadata:`wget -r -H -nc -np -nH --cut-dirs=1 -l 1 -e robots=off -i ../itemlist.txt -B 'http://archive.org/download/'`</span>

<span style="color: #3366ff;">`-A  -R`   accept-list and reject-list, either limiting the download to certain kinds of file, or excluding certain kinds of file; for instance, adding the following options to your wget command would download all files except those whose names end with \_orig\_jp2.tar or \_jpg.pdf:`wget -r -H -nc -np -nH --cut-dirs=1 -R _orig_jp2.tar,_jpg.pdf` -e robots=off -i ../itemlist.txt -B ‘http://archive.org/download/’</span>

<span style="color: #3366ff;">And adding the following options would download all files containing zelazny in their names, except those ending with .ps:`wget -r -H -nc -np -nH --cut-dirs=1 -A "*zelazny*" -R .ps` -e robots=off -i ../itemlist.txt -B ‘http://archive.org/download/’</span>

<span style="color: #3366ff;">See [<span style="color: #3366ff;">http://www.gnu.org/software/wget/manual/html\_node/Types-of-Files.html</span>](http://www.gnu.org/software/wget/manual/html_node/Types-of-Files.html) for a fuller explanation.</span>  
<span style="color: #3366ff;"> …………………………………………………………………………………………………………………………</span>

**Step 4: Run the command**  
1. Open your terminal emulator (Terminal or Cygwin)  
2. In your terminal emulator window, move into your folder/directory. To do this:  
For Mac: type cd Desktop/Files  
For Windows type in Cygwin after the $ cd /cygdrive/c/Users/archive/Desktop/Files  
3. Hit return. You have now moved into th e”Files” folder.  
4. In your terminal emulator enter or paste your wget command. If you are using on of the commands on this page be sure to copy the entire command which may be on two lines. You can just cut and paste in Mac. For Cygwin, copy the command, click the Cygwin logo in the upper left corner, select Edit then select Paste.  
5. Hit return to run the command.

You will see your progress on the screen.  If you have sorted your itemlist.txt alphabetically, you can estimate how far through the list you are based on the screen output. Depending on how many files you are downloading and their size, it may take quite some time for this command to finish running.

<span style="color: #3366ff;">…………………………………………………………………………………………………………………………</span>  
<span style="color: #3366ff;"> NOTE: We strongly recommend trying this process with just ONE identifier first as a test to make sure you download the files you want before you try to download files from many items.</span>  
<span style="color: #3366ff;"> …………………………………………………………………………………………………………………………</span>

**Tips:**

-   You can terminate the command by pressing “control” and “c” on your keyboard simultaneously while in the terminal window.
-   If your command will take a while to complete, make sure your computer is set to never sleep and turn off automatic updates.
-   If you think you missed some items (e.g. due to machines being down), you can simply rerun the command after it finishes.  The “no clobber” option in the command will prevent already retrieved files from being overwritten, so only missed files will be retrieved.

Posted in [Technical](http://blog.archive.org/category/technical/) | <span class="comments-link">[34 Replies](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comments)</span>

### Post navigation

<span class="nav-previous">[<span class="meta-nav">←</span> Internet Hall of Fame](http://blog.archive.org/2012/04/24/internet-hall-of-fame/)</span> <span class="nav-next">[Improved theora/ogg video derivatives! <span class="meta-nav">→</span>](http://blog.archive.org/2012/05/01/improved-theoraogg-video-derivatives/)</span>

34 thoughts on “Downloading in bulk using wget”
-----------------------------------------------

1.  <span id="li-comment-131347"><img src="http://2.gravatar.com/avatar/284f24d3e724c5b996f04e917b216f23?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/284f24d3e724c5b996f04e917b216f23?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://www.thomasvanhoutte.be" class="url">Thomas Vanhoutte</a>** [April 29, 2012 at 10:32 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-131347)</span> The power of unix, once again proven.  
    Thanks for the step by step explaination.

2.  <span id="li-comment-132078"><img src="http://2.gravatar.com/avatar/eccd85ad4be3d50b15490cfaf4c348c2?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/eccd85ad4be3d50b15490cfaf4c348c2?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**John Hauser** [May 2, 2012 at 5:48 am](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-132078)</span> Thanks for this clear and detailed post!

    In my case, using ubuntu 10.04, i had to add a couple of extra parameters:  
    -D archive.org –exclude-domains blog.archive.org –exclude-domains web.archive.org

    to keep wget from wandering off into related domains like openlibrary.org, nasaimages.org and archive-it.org referred to on the <a href="http://www.archive.org" class="uri">http://www.archive.org</a> home page (announcements section and /projects). The exclude-domain parameters were necessary to keep wget from recursing down into the indicated sites.

    i don’t know if this is a DNS name resolution artifact of running the command from outside of archive.org vs. inside, but a little experimentation with your command example got me to the answer within a couple of tries.

3.  <span id="li-comment-134818"><img src="http://0.gravatar.com/avatar/30a58ec163c89be2d20a3a302750c5e2?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/30a58ec163c89be2d20a3a302750c5e2?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Jim Walton** [May 11, 2012 at 4:43 am](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-134818)</span> Not getting it to work. First, the argument -cut-dirs should be –cut-dirs, at least in Windows otherwise I get an invalid argument error. When I run it I get a list of invalid URL and unsupported scheme errors. I have added the argument -A pdf to only download pdf files.

    What I have done is created a csv file from advanced search and ran a script to strip off the quotes. When I run wget, it produces the url ‘http://www.archive.org/download/\[filename from items.txt\].

    Where do I go from here?

4.  <span id="li-comment-134835"><img src="http://0.gravatar.com/avatar/30a58ec163c89be2d20a3a302750c5e2?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/30a58ec163c89be2d20a3a302750c5e2?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Jim Walton** [May 11, 2012 at 6:20 am](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-134835)</span> –cut-dirs should read – -cut-dirs. The two dashes were converted to an em dash…

5.  <span id="li-comment-135038"><img src="http://0.gravatar.com/avatar/30a58ec163c89be2d20a3a302750c5e2?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/30a58ec163c89be2d20a3a302750c5e2?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Jim Walton** [May 11, 2012 at 11:09 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-135038)</span> This doesn’t seem to work in Windows, but works fine in Linux. Just be aware that the –cut-dirs uses 2 dashes, not a single one as it appears on the web site. The browser converts the double dash into an emdash.

    In addition to the -D and –exclude-domains arguments I also added -nd so I would get all the files in a single directory instead of creating a separate directory for each file.

    For those who don’t normally use Linux or wget, typing “wget -help &gt;wget.txt” without the quotes will save all the help commands in a text file in the current directory.

6.  <span id="li-comment-143399"><img src="http://1.gravatar.com/avatar/a67fd27732a4e772106474051dc2341c?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://1.gravatar.com/avatar/a67fd27732a4e772106474051dc2341c?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**silvermane** [May 30, 2012 at 7:25 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-143399)</span> This does work on Windows, you just have to replace single with double quotes after the -B argument, and watch out for the em-dashes.

    Command line examples should be placed within a \[code\] tag to prevent their “beautifying.”

7.  <span id="li-comment-160972"><img src="http://1.gravatar.com/avatar/7441b1b55fc32867998c2c004e83191d?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://1.gravatar.com/avatar/7441b1b55fc32867998c2c004e83191d?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://declan.net" class="url">Declan Fleming</a>** [June 30, 2012 at 5:25 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-160972)</span> I’m not saying this is the prettiest hack, but it finally worked on Ubuntu:

    wget -r -l 1 -nc -H -np -nH -e robots=off –cut-dirs=1 -i ../itemlist.txt -B ‘http://www.archive.org/download/’

    the -np option was not working for me, and it kept traversing up. I locked the recursion down to 1 level and that seemed to work!

    D

8.  <span id="li-comment-249079"><img src="http://0.gravatar.com/avatar/315628d84b0304b5e6166bf05fcd3520?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/315628d84b0304b5e6166bf05fcd3520?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**kumar** [January 17, 2013 at 9:50 am](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-249079)</span> Hi,

    I need to download a set of files which i have mentioned in a file (x.txt), after download i need all the files to be moved with today’s date and i need all that files names should append to a .csv file in a single row with a space in between each file.  
    does anyone have idea. If so help me out to fix my problem.

    1.  <span id="li-comment-254494"><img src="http://0.gravatar.com/avatar/9fc10fa6ecfdd53bebaef15fcb6ca459?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/9fc10fa6ecfdd53bebaef15fcb6ca459?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Jason** [February 10, 2013 at 10:56 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-254494)</span> You don’t say what operating system you’re using.  
        In linux something like

        touch \*  
        ls | tr “\\n” “,” &gt;text.csv  
        mv \* \[target-dir\]

9.  Pingback: <a href="http://blog.archive.org/2013/01/20/bulk-downloading-aaron-swartz-and-terms-of-service/" class="url">Bulk Downloading, Aaron Swartz, and Terms of Service | Internet Archive Blogs</a>

10. Pingback: <a href="http://www.myblogdammit.net/?p=8443" class="url">Aaron Swartz Memorial | It’s My Blog, Dammit! …. Anything and Everything!</a>

11. <span id="li-comment-254401"><img src="http://0.gravatar.com/avatar/66dee7a1f31292913f5ea6b38491dba1?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/66dee7a1f31292913f5ea6b38491dba1?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Ralph H** [February 10, 2013 at 8:40 am](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-254401)</span> This seems like an unnecessarily complex process, when all I really need is a list of archive.org URLs that I can feed to wget or another bulk HTTP downloader.  
    Here’s the wget output:  
    –2013-02-10 03:32:07– <a href="http://archive.org/details/68micro-vol-01-num-3" class="uri">http://archive.org/details/68micro-vol-01-num-3</a>  
    Connecting to archive.org|207.241.224.2|:80… connected.  
    HTTP request sent, awaiting response… 200 OK  
    Length: unspecified \[text/html\]  
    Saving to: \`68micro-vol-01-num-3′  
    \[ \] 18,499 98.3K/s in 0.2s  
    2013-02-10 03:32:08 (98.3 KB/s) – \`68micro-vol-01-num-3′ saved \[18499\]  
    **Removing 68micro-vol-01-num-3 since it should be rejected.** *waste of bandwidth*

    1.  It appears that wget is actually downloading unrelated web pages just to retrieve the links to the PDF files. This is odd, since I specified the ‘-A’ option to only permit .pdf files – Shouldn’t I be able to search for these (or any other filetype directly?)

    2.  Searching for identifiers seems like the wrong thing to search for, given that I still have to allow wget to traverse a directory in hopes of finding a .pdf file.  
        Knowing how the web sites are structured, and the arcane list of servers and

12. Pingback: <a href="http://gareth.halfacree.co.uk/2013/04/bulk-downloading-collections-from-archive-org" class="url">Bulk Downloading Collections from Archive.org | Gareth Halfacree</a>

13. <span id="li-comment-266003"><img src="http://0.gravatar.com/avatar/0c81deab3b848f5d7c97f25a6213a034?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/0c81deab3b848f5d7c97f25a6213a034?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**Hank Bromley** [April 4, 2013 at 7:22 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-266003)</span> Note that I have edited the original post, replacing “http://www.archive.org/…” with “http://archive.org/”.

    Some time ago – but after I initially formulated the wget command – we arranged for <a href="http://www.archive.org" class="uri">http://www.archive.org</a> requests to redirect to archive.org. I haven’t tracked down exactly why, but that redirect is apparently causing wget to see lots of additional links it wasn’t intended to, beyond those inside the targeted item directories, and consequently downloading many unrelated files. Dropping the “www.” makes it behave correctly again.

    Some of the modifications suggested in previous comments were generated in order to cope with that misbehavior, and may not be necessary with the “www.” removed.

    Also, the [pingback](http://gareth.halfacree.co.uk/2013/04/bulk-downloading-collections-from-archive-org) just above, from [Gareth Halfacree](http://gareth.halfacree.co.uk/), offers a handy shell script that simplifies using the wget, as it combines the several steps into a single convenient command. Check it out!

14. Pingback: <a href="http://blog.archive.org/2013/04/11/450000-early-journal-articles-now-available/" class="url">450,000 Early Journal Articles Now Available | Internet Archive Blogs</a>

15. <span id="li-comment-267643"><img src="http://2.gravatar.com/avatar/532ab47fe2be7f6ad81502f619e40389?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/532ab47fe2be7f6ad81502f619e40389?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**desu** [April 12, 2013 at 5:35 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-267643)</span> There is a wget for Windows, doesn’t that make installing cygwin kinda unnecessary?

16. Pingback: <a href="http://www.infodocket.com/2013/04/13/jstor-early-journal-content-articles-now-accessible-via-internet-archive/" class="url">JSTOR “Early Journal Content” Articles Now Accessible via Internet Archive | LJ INFOdocket</a>

17. Pingback: <a href="http://catwizard.net/posts/20130416194839.html" class="url">1923年前外文期刊：免费访问、批量下载、文本挖掘 » 编目精灵III</a>

18. Pingback: <a href="http://ianmilligan.ca/2013/05/10/an-aside-an-ode-to-exploratory-research/" class="url">An Aside: An Ode to Exploratory Research | Ian Milligan</a>

19. <span id="li-comment-275760"><img src="http://0.gravatar.com/avatar/93cfaa9e13f3e1568d35a4e817f34494?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/93cfaa9e13f3e1568d35a4e817f34494?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**kalpaz** [June 9, 2013 at 12:29 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-275760)</span> i am trying to search the books which are available in pdf format, please guide me what should i put in the advance search and where

20. Pingback: <a href="http://ianmilligan.ca/2013/06/17/finding-ca-domains-in-the-80tb-wide-crawl/" class="url">Finding .ca domains in the 80TB Wide Crawl | Ian Milligan</a>

21. <span id="li-comment-278061"><img src="http://2.gravatar.com/avatar/5874476a4dc0b10817debc60df58f6a3?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/5874476a4dc0b10817debc60df58f6a3?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://archive.org" class="url">brewster</a>** [June 26, 2013 at 1:27 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-278061)</span> This is a useful tutorial on bulk downloading and then how to make a simple search engine out of the results: <a href="http://williamjturkel.net/2013/06/25/batch-downloading-and-building-simple-search-engines-with-command-line-tools-in-linux/" class="uri">http://williamjturkel.net/2013/06/25/batch-downloading-and-building-simple-search-engines-with-command-line-tools-in-linux/</a>

22. Pingback: <a href="http://blog.archive.org/2013/07/04/how-to-use-the-virtual-machine-for-researchers/" class="url">How to use the Virtual Machine for Researchers | Internet Archive Blogs</a>

23. <span id="li-comment-282145"><img src="http://0.gravatar.com/avatar/c3c70a4de76f7a42da6bb773f852db60?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://0.gravatar.com/avatar/c3c70a4de76f7a42da6bb773f852db60?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://blogginggate.com/" class="url">peng wu</a>** [July 31, 2013 at 8:08 am](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-282145)</span> Thanks for easy detail. This is a useful bulk downloading.

24. Pingback: <a href="http://ianmilligan.ca/2013/08/02/search-engine-on-the-warc-collection/" class="url">Search Engine on the WARC Collection: An Update on my Project | Ian Milligan</a>

25. <span id="li-comment-284066"><img src="http://2.gravatar.com/avatar/811e259f59ab77d9664c590885bec84a?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/811e259f59ab77d9664c590885bec84a?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://www.jeffreythompson.org" class="url">Jeff Thompson</a>** [August 9, 2013 at 11:16 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-284066)</span> FWIW, I found that changing `--cut-dirs=2` to `--cut-dirs=3` downloaded just the files themselves, not creating and enclosing them in directory.

26. <span id="li-comment-286397"><img src="http://2.gravatar.com/avatar/b4faf1233f484524a179ba1e1ec9e8b0?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/b4faf1233f484524a179ba1e1ec9e8b0?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://www.nexopia.com/users/taurusrefund5/blog/101-video-advertising-your-business-how-to-begin" class="url">google seo check</a>** [August 23, 2013 at 8:35 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-286397)</span> Examples include the ‘description’ of the  
    content, ‘keywords’ used and the ‘Title’ of the page.  
    Image ALT Tags – Alt image tags are associated with images on  
    a website. He has to deal with traffic getting back  
    to his office.

27. <span id="li-comment-292474"><img src="http://2.gravatar.com/avatar/e142e0c8993fa429b57bfa5003109b35?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/e142e0c8993fa429b57bfa5003109b35?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**???** [October 15, 2013 at 12:10 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-292474)</span> don’t know wut the hell you guys are talking about.

    I’m using windows7 and hence i wanted to download internet acrchive through cygwin which the above instruction has suggested. i install pretty much whole package but the result doesn’t work, at all. I’m just wondering how the internet archive isn’t that considering novice like me.. just hope they provide download engine someday. seriously i got a deeper frustration on this. been spending too much time, energy, and effort on this but I earned nothing except anger, dipression & disappointing.

28. <span id="li-comment-292493"><img src="http://2.gravatar.com/avatar/e142e0c8993fa429b57bfa5003109b35?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/e142e0c8993fa429b57bfa5003109b35?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**???** [October 15, 2013 at 2:10 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-292493)</span> I apologize about my prior negative comment, I figured out the way via following the instruction above, from the beginning to its end. thx for such a kind instruction!

29. <span id="li-comment-294685"><img src="http://2.gravatar.com/avatar/29af664bb34c9f9edd8abc7eb34f9e7a?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/29af664bb34c9f9edd8abc7eb34f9e7a?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://kascouponcode.com/kaspersky-antivirus-2014-coupon-and-review/" class="url">Kaspersky Coupon</a>** [October 27, 2013 at 7:20 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-294685)</span> FWIW, I found that changing –cut-dirs=2 to –cut-dirs=3 downloaded just the files themselves, not creating and enclosing them in directory.

30. <span id="li-comment-294686"><img src="http://2.gravatar.com/avatar/55393d6123f556b9c6431f07034951b6?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/55393d6123f556b9c6431f07034951b6?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://kascouponcode.com/" class="url">rahul</a>** [October 27, 2013 at 7:21 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-294686)</span> Why do we have to create a folder to download wget in bulk, I think we can download without it as well

31. <span id="li-comment-294758"><img src="http://2.gravatar.com/avatar/ed4329981126d947ca83f93ea95b2a72?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/ed4329981126d947ca83f93ea95b2a72?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://www.bariatricmexico.com" class="url">JC</a>** [October 28, 2013 at 6:03 am](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-294758)</span> Thank you, awesome instructions.

32. <span id="li-comment-299968"><img src="http://1.gravatar.com/avatar/a596a4f3d2e938ded806c64483e08b9c?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://1.gravatar.com/avatar/a596a4f3d2e938ded806c64483e08b9c?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://mcafeepromocodes.org/" class="url">McAfeepromocodes</a>** [November 21, 2013 at 6:31 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-299968)</span> FWIW, I found that changing –cut-dirs=2 to –cut-dirs=3 downloaded just the files themselves, not creating and enclosing them in directory.

33. <span id="li-comment-304902"><img src="http://2.gravatar.com/avatar/896f532b9e11e97d3fc808d4b871673b?s=44&amp;d=mm&amp;r=g" class="avatar avatar-44 photo" srcset="http://2.gravatar.com/avatar/896f532b9e11e97d3fc808d4b871673b?s=88&amp;d=mm&amp;r=g 2x" width="44" height="44" />**<a href="http://techpromocodes.com" class="url">Tech Promo</a>** [December 15, 2013 at 5:07 pm](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/#comment-304902)</span> Why do we have to create a folder to download wget in bulk, I think we can download without it as well

Comments are closed.

<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fblog.archive.org%2F2012%2F04%2F26%2Fdownloading-in-bulk-using-wget" class="shareitem"><img src="http://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/facebook-icon.png" alt="Share to Facebook" /></a> <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fblog.archive.org%2F2012%2F04%2F26%2Fdownloading-in-bulk-using-wget&amp;via=internetarchive&amp;text=Downloading+in+bulk+using+wget" class="shareitem"><img src="http://blog.archive.org/wp-content/plugins/archive-sharing-widget/public/images/twitter-icon.png" alt="Share to Twitter" /></a>

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
