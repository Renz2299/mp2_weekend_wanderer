# Weekend Wanderer - *Milestone Project Two*

**Find the final project here:** https://renz2299.github.io/mp2_weekend_wanderer/

An interactive outdoor adventure website intended to help users get out and explore the area they live in, consisting of three pages: an Explore page, an Inspiration page and a Contact page.

![The Weekend Wanderer site shown across multiple displays](assets/img/readme_imgs/renders_final.png)

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [User Experience](#user-experience)
3. [Design Choices](#design-choices)
4. [Project Management](#project-management)
5. [Site Development & Features](#site-development--features)
    * [Universal Site Elements](#universal-site-elements)
    * [Explore Page](#explore-indexhtml)
    * [Inspiration Page](#inspiration-inspirationhtml)
    * [Contact Page](#contact-contacthtml)
6. [Pre-Deployment Testing](#pre-deployment-testing)
    * [Responsiveness](#)
    * [Browser Compatibility](#)
    * [Bug Fixes](#)
    * [Code Validation](#)
    * [User Story Testing](#)
    * [Feature Testing](#)
7. [Deployment](#deployment)
8. [Post-Deployment Testing](#post-deployment-testing)
    * [Responsiveness](#)
    * [Browser Compatibility](#)
    * [Bug Fixes](#)
    * [Lighthouse Testing](#)
    * [Feature Testing](#)
    * [Future Improvements](#)
9. [Credits & Acknowledgements](#credits--acknowledgements)

---

## Project Overview
Weekend Wanderer is an interactive outdoor adventure website intended to help users get out and explore the area they live in. The website consists of three pages: An Explore page, an Inspiration page and a Contact page. The Explore page is the home page of the site and consists of an interactive map where users can find hiking trails, nature reserves, landmarks and beaches nearby. The Inspiration page contains multiple pre-made guides showcasing the best outdoor areas around a certain town. The Contact page allows users to ask questions as well as submit their own recommendations to be published to the website.

---

## User Experience

### Project Goals
The primary goal of the website is to provide a helpful tool where users can find outdoor areas near them that they would like to explore. Weekend Wanderer has two key target audience:
- People wanting to explore the natural area around them.
- People traveling to a new area looking for recommended outdoor areas.

### Persona One

**User:** Jade, 24

Jade is a Junior Marketing Executive based in Oxford, she enjoys the outdoors and hiking with her Fiancee.

**Jade's Goals:**
- Find new, highly rated areas to explore nearby during her weekends.
- Find recommendations for hiking near other towns to help plan her next weekend getaway.
- Read real people's reviews of near and far outdoor areas.

**How the site helps Jade:**
- Allows her to find hiking trails within walking/ driving distance.
- Provides pre-made guides showcasing the best trails to hike near a specific town or region.

### Persona Two
**User:** Mark, 50 & Rebecca, 48

Mark and Rebecca live on the outskirts of Cardiff, Mark is a Civil Engineer and Rebecca is a Dentist. They now both work part-time and have taken up trail running together.

**Mark & Rebecca's Goals:**
- Explore new trails nearby.
- Read reviews of hiking trails nearby.
- Find a suitable place for an active weekend getaway.

**How the site helps Mark & Rebecca:**
- Shows them trails within walking/ driving distance along with their rating.
- Provides pre-made guides that showcase the best trails within certain areas.

### Wireframes

#### Mk1 Wireframes
The first round of wireframes showed a very different plan for the website. The site consisted of a home page with a grid of outdoor imagery and a button that would direct users to the explore page. The explore page contained an interactive map where user's could select a place and add it to their saved trails for future getaways. And finally, an inspiration page containing pre-made travel guides.

Whilst these wireframes were helpful in the initial planning of the site, they were quite ambitious. The feature allowing users to save places is currently above my skillset as I cannot develop a backend to the site, therefore when the page is refreshed the saved places would be forgotten, therefore I chose to simplify the site and keep the focus on making an interactive map that could work across all screen sizes and truly help users find places to explore within their current area.

**Home Page**

![Initial wireframes of the Weekend Wanderer home page](assets/img/readme_imgs/wireframes_mk1-01.png)

**Explore Page**

![Initial wireframes of the Weekend Wanderer explore page](assets/img/readme_imgs/wireframes_mk1-02.png)

**Inspiration Page**

![Initial wireframes of the Weekend Wanderer inspiration page](assets/img/readme_imgs/wireframes_mk1-03.png)

#### Mk2 Wireframes

The initial wireframes were edited and the overall site simplified to keep the focus on the interactive map as that is the main interactive element of the site.

**Explore Page**

The explore page consists of an interactive map based on the user's current location showing the top trails in their area. The user can zoom and pan this map to explore further or nearer to certain areas. Finally, underneath the map is details of a specific place the user has clicked on the map.

![Developed wireframes of the Weekend Wanderer explore page](assets/img/readme_imgs/wireframes_mk2-01.png)

**Inspiration Page**

The inspiration page is similar to a blog where the content will continue to expand as guides are added to the site. For the purpose of this project there will be three guides each showcasing a different area and the best rated places to visit in that area. Each page will consist of an interactive map with markers placed on the best places.

![Developed wireframes of the Weekend Wanderer inspiration page](assets/img/readme_imgs/wireframes_mk2-02.png)

**Contact Page**

Finally, the contact page consists of a single, simple form where users can provide their name, email address and a question or can attach a document containing their own recommendations they would like to submit to the site.

![Developed wireframes of the Weekend Wanderer contact page](assets/img/readme_imgs/wireframes_mk2-03.png)

---

## Design Choices

### Colours
From looking at trends and current outdoor brands on the market, green and brown appear to be recurring colours used within the industry due to their resemblance of the outdoors. I used Adobe Colour to play around with combinations of different greens and browns until I came to a colour scheme that felt fitting. Here is the final colour scheme consisting of two shades of green, white, one shade of grey and one shade of brown.

![The final colour scheme (dark & light green, white, light grey & dark brown)](assets/img/readme_imgs/colour_scheme_final.png)

This colour scheme was tested using Adobe's accessibility tools to check how well the colours could be layered.

All colours were tested on a white background to check if they could be used as text and if white would be suitable site background. The light green and the grey do not work as text on a white background, therefore will need alternative colour in between if used as text.

![Dark green tested on a white background](assets/img/readme_imgs/colour_check_1.png)

![Light green tested on a white background](assets/img/readme_imgs/colour_check_2.png)

![Light grey tested on a white background](assets/img/readme_imgs/colour_check_3.png)

![Dark brown tested on a white background](assets/img/readme_imgs/colour_check_4.png)

The light green and the grey were tested on the dark green and brown backgrounds to establish if either colour could work as a header/ footer background colour. It was also established that the brown and dark green could not be layered due to their contrast ratio.

![light green tested on a dark green background](assets/img/readme_imgs/colour_check_5.png)

![Light grey tested on a dark green background](assets/img/readme_imgs/colour_check_6.png)

![Light grey tested on a dark brown background](assets/img/readme_imgs/colour_check_7.png)

![Light green tested on a dark brown background](assets/img/readme_imgs/colour_check_8.png)

#### Hi-Fi Wireframes

After testing the five colours together for compatibility, they were implemented to the wireframes, different colours were tried in different positions until they felt correct. Here are the colour assignments and final hi-fi wireframes.
- Dark Green #476E01 - Header & Footer Background
- Light Green #7FFF30 - Hovers & Clicked Links
- White #FFFFFF - Site Background, Text on coloured Backgrounds
- Grey #F0F0F0 - Buttons
- Dark Brown #5C3A27 - Text Colour

![Final wireframes of the Weekend Wanderer explore page](assets/img/readme_imgs/wireframes_mk3-01.png)

![Final wireframes of the Weekend Wanderer inspiration page](assets/img/readme_imgs/wireframes_mk3-02.png)

![Final wireframes of the Weekend Wanderer contact page](assets/img/readme_imgs/wireframes_mk3-03.png)

### Typography

The chosen fonts for this site are Google Fonts: Karla and Roboto.

Karla will be used for headers, taglines and navigation, only in uppercase.

![Karla font tested in regular and italic](assets/img/readme_imgs/karla_testing_1.png)

Roboto will be used for paragraph text, links and the footer. The following screenshots show Roboto at 16px in different weights.

![Roboto font tested in light 300](assets/img/readme_imgs/roboto_testing_1.png)
![Roboto font tested in regular 400](assets/img/readme_imgs/roboto_testing_2.png)
![Roboto font tested in bold 700](assets/img/readme_imgs/roboto_testing_3.png)

---

## Project Management

### Languages Used
- HTML5
- CSS3
- JavaScript

### Version Control
During site development GitHub was used to manage versions of each file, commits were made often and consisted of small bite-sized edits to individual features so it would be easier to roll back the site to a previous version if required. Compared to milestone project one, there were fewer commits due to the initial HTML and CSS being boilerplate code from the previous project, however, I was more thorough when it came to commits, ensuring that new features had an individual commit and there was little crossover. This was also due to JavaScript being a steep learning curve and by committing little and often I could rollback a feature if it went wrong or affected another part of the site. In total, there were 39 commits for this project. Details of the commits can be found here: https://github.com/Renz2299/mp2_weekend_wanderer/commits/main

---

## Site Development & Features

### Universal Site Elements

#### External Links Used Across Site
Bootstrap CSS framework was used throughout the site to aid in developing a responsive, well-laid out website. This framework allowed the main structure of the site to be developed quickly, therefore more time could be spent focussing on the interactivity of the map, fine tuning elements and appropriately styling the site.

Font Awesome icons were used for the social links in the footer.

Two Google fonts were used throughout the site: Karla and Roboto. Details on the choice of these fonts can be found in the [Typography](#typography) section above.

#### Header & Main Navigation
The header of the site consists of the Weekend Wanderer logo on the left and the primary site navigation on the right. The background is dark green and the content is off-white but turns bright green when hovered or the active element. The header sits on top of the page content, therefore all page content has a top padding of 7em so nothing is hidden behind the header.

On screen sizes smaller than 768px wide the main navigation will become a hamburger button that can be toggled to show the navigation in a dropdown format.

Site header on screens 768px and above:

![Site header on tablet screens or larger](assets/img/readme_imgs/header_992px.png)

Site header on screens below 768px:

![Site header on mobile screens](assets/img/readme_imgs/header_767px.png)

#### Footer
The footer consists of copyright information on the left and social links on the right all on a dark green background.

On screen sizes below 576px wide, the two columns of content stack and float on the right-hand side of the footer.

Site footer on screens 576px and above:

![Site footer on tablet screens or larger](assets/img/readme_imgs/footer_768px.png)

Site footer on screens below 576px:

![Site footer on mobile screens](assets/img/readme_imgs/footer_575px.png)

### Explore (index.html)
The Explore page begins with a tagline and instructions describing how to use the interactive map to find places to explore nearby.

![Explore page tagline](assets/img/readme_imgs/tagline.png)

Beneath the tagline and instructions are the input criteria where the user can select a type of place they would like to search for from four options: 'Hikes', 'Nature Reserves', 'Beaches', and 'Landmarks'. They can then press submit to see 20 of the closest places of that type on the map below.

This feature was originally omitted from the site wireframes since it felt above my skillset when trialling the Google Maps API. However, once the JavaScript code for the map was in place, I begun testing some methods to change the search query and eventually found a way to introduce the changeInput function using the submit button that would change the search query to the value of the dropdown. This function also contained four if/ else if statements that change the marker image depending on the user's input criteria. Finally, this function also resets the map bounds and deletes any previous markers to only show the results from the most recent search in a suitably sized map.

The input criteria consists of two bootstrap columns within a row so that on smaller screen sizes the criteria will stack, making it easier to use.

Input criteria on screens 576px and above:

![Input criteria on tablet screens or larger](assets/img/readme_imgs/criteria_768px.png)

Input criteria on screens below 576px:

![Input criteria on mobile screens](assets/img/readme_imgs/criteria_576px.png)

The interactive map is the main focus of the Explore page and is in the centre of the page. It uses HTML5 geolocation to locate the user (if geolocation has been denied, it defaults to Sydney, Australia) and upon selecting a type of place and pressing 'SUBMIT' the map will show the top 20 closest results for the chosen place type and zoom the map to fit the markers within it's bounds. It does this using the getNearbyPlaces function to make a place search request, then the nearbyCallback function to handle to results of up to 20 places, and then the createMarkers function to add markers to each of the 20 places. The createMarkers function also adds a click event listener to each marker and will only fetch the details of place upon clicking on that marker.

On screens over 768px wide, the padding either side of the map is set to 10% so that it doesn't fill all the blank space on the page and keeps the information digestible to the user.

Interactive map on screens 768px wide:

![Interactive map](assets/img/readme_imgs/map_768px.png)

There are four different marker icons, one for each type of place the user can select. 'If' and 'else if' statements are used in map.js to select the different marker icons depending on what place type has been selected.

Here are the four different marker icons:
![alt text](assets/img/hiking2.png "Title")
![alt text](assets/img/forest2.png "Title")
![alt text](assets/img/beach_icon.png "Title")
![alt text](assets/img/tower.png "Title")

The final element of the Explore page is the place card that appears under the map when the user clicks on one of the markers for more details.

The place details are shown in two bootstrap columns, with the photo on the left and the name, rating, address and website link on the right. However, on mobile screens this changes so the columns stack on top of each other. In the wireframes these details were shown stacked on all screen sizes, however this meant on larger screens the image was stretched, especially if it was a portrait image, by only stacking them on mobile this felt like the best way to show the images correctly. This information is retrieved from the Google Places library using the getDetails and showDetails functions in map.js.

Place card on screens 768px and above:

![Place care on tablet screens and larger](assets/img/readme_imgs/place_card_992px.png)

Place card on screens below 576px:

![Place card on mobile screens](assets/img/readme_imgs/place_card_575px.png)

### Inspiration (inspiration.html)
The Inspiration page begins with a tagline and brief description of the page.

![Inspiration page tagline](assets/img/readme_imgs/inspo_tag_992px.png)

Below the tagline are cards containing brief information about different places that adventure guides have been created for. They consist of an image, the name of the place, a short paragraph about the place and a button that links the user to the specific adventure guide for that place. The idea behind this page was that more guides could be added (similar to a travel blog) so user's could come to this page for inspiration about new places they can explore.

![Place card on a large tablet screen](assets/img/readme_imgs/inspo_card_992px.png)

### Contact (contact.html)
The contact page consists of a single contact form for users to send enquiries about the site content and submit their own adventure guides for the Inspiration page.

The form contains fields for name, email address, message and an attachment. It is centred on the page at 70% of the screen width to not fill up too much of the blank space.

Contact form on screens 1200px wide:

![Contact form on desktop/ laptop screens](assets/img/readme_imgs/contact_form_1200px.png)

Contact form on screens below 576px:

![Contact form on mobile screens](assets/img/readme_imgs/contact_form_576px.png)

Upon completion of the contact form, the user is directed to a Thank You page, indicating their details have been recorded. This page still contains the site header, navigation bar and footer, meaning the user never leaves the site and can still return to the other site pages.

The Thank You page contains the following text:

![Thank you page text](assets/img/readme_imgs/thank_you.png)

## Pre-Deployment Testing

### Testing During Development

Testing was carried out during development to check features were working as expected and to identify issues immediately so they could be rectified. This was done using the Live Server extension for VSCode.

The interactive map on index.html was tested each time new section of code was added (eg. a new function or change to a function) to check the new code was working as well as allow myself to better understand the code I was adding since this was my first project using JavaScript and I was relying on a lot of trial and error to get the code working properly.

Screenshot of initial interactive map:

![Initial interaction map with markers for 'hikes' nearby](assets/img/readme_imgs/initial_map_992px.png)

Once the input criteria was added to the interactive map, through testing I found that the markers don't refresh if the user searches again irrespective of the place type. This took a lot of trial and error to resolve, in the end required a new function called deleteMarkers.

Screenshot to show deleteMarkers function:

![DeleteMarkers function](assets/img/readme_imgs/delete_markers.png)

After resolving the duplicate markers issue, the issue of the map bounds not resetting upon a new search was discovered. This meant implementing another action after the deleteMarkers function is called to reset the map bounds before resetting the search criteria.

Screenshot to show map bounds reset:

![Map bounds reset code](assets/img/readme_imgs/map_bounds_reset.png)

The header and footer were tested whilst the styling was being applied to ensure the margins & padding were correct on all screen sizes. This allowed a minor padding issue on the mobile screen menu to be picked up during development.

![Navbar with no left padding on dropdown navigation](assets/img/readme_imgs/navbar_toggler_before.png)
![Navbar with left padding on dropdown navigation](assets/img/readme_imgs/navbar_toggler_after.png)

By testing responsiveness during development, this also allowed an issue with the place card image to be found. The original layout had the image above the details on the card on all screens, which meant on larger screens if the image retrieved from the places library was portrait it would end up severely stretched. Therefore, bootstrap columns were introduced to the place card so the image and details would appear in two columns side-by-side and could stack on smaller screens, keeping the image at a relatively normal aspect ratio.

Screenshots of place card columns before and after:

![Place card before adding bootstrap columns](assets/img/readme_imgs/place_card_before.png)
![Place card after adding bootstrap columns](assets/img/readme_imgs/place_card_992px.png)

### Bug Fixes

The site was initially tested on two screen sizes using Chrome developer tools, one mobile screen and one tablet screen. This was to aid in quickly resolving the main bugs related to responsiveness across the site before testing on a range of different screen sizes when more intricate fixes may be required.

#### Site Tested on iPhone XR
![Weekend Wanderer site pages on iPhone XR](assets/img/readme_imgs/pre_d_response_testing_iphone_xr.png)

#### Site Tested on iPad Pro
![Weekend Wanderer site pages on iPad Pro](assets/img/readme_imgs/pre_d_response_testing_ipad_mini.png)

From this testing, I found quite a lot of minor bugs, mainly to do with the styling.

**Bug One:** On mobile screens the navbar toggler sits underneath the logo. Instead the logo should stack and the toggler remain on the right of the navbar.

To resolve this issue, I initially tried to make the logo text stack on smaller screens, however this proved quite difficult. Therefore, I found the point at which the toggler stacked under the logo (419px) and created a media query for screens beneath 420px wide to set the logo font-size to 20px. This now means the toggler will only stack on screens beneath 320px wide.

![Updated navbar on mobile screens](assets/img/readme_imgs/logo_toggler_fix_414px.png)

**Bug Two:** The footer isn't sticky to the bottom of the page, therefore on pages with less content than the screen height or on widescreens the footer often isn't at the bottom of the screen.

To resolve this problem I incorporated CSS flexbox code to set the body to flex it's items vertically and setting the footer margin-top to auto meaning it will fill the whole page since it's the last element in the HTML.

![Updated footer on mobile screens](assets/img/readme_imgs/footer_fix_414px.png)

**Bug Three:** The inspiration page on mobile screens doesn't have any left or right margins, making the content fill the whole width of the screen.

This was resolved by removing the inspo-card class from the bootstrap columns that the content was within and adding it to row around each element.

![Updated inspiration page on mobile screens](assets/img/readme_imgs/inspo_fix_414px.png)

**Bug Four:** The images on the inspiration cards aren't optimised for the space they are filling on the page. They need reducing in file size and cropping to fit the space they are intended on the site. Also, the text on these place cards needs exchanging for site-specific text rather than lorem ipsum placeholder text.

This was resolved by editing the images to the same size and resolution, which was just big enough to show good image quality on screens above 1400px. And then adding flexbox CSS so the image would shrink rather than stretch or condense with the differing screen sizes.

![Updated inspiration place card on mobile screens](assets/img/readme_imgs/inspo_img_fix_414px.png)

Finally, the thank-you page has index.html set as it's active page. This was an easy fix and just required removing the active class from the nav-link HTML.

### Responsiveness

After completing the first round of responsiveness testing, the site was tested on the following screen sizes using Chrome developer tools.

Screen Width | | | | | Device | | | | |
---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---:
| | Galaxy S9+ (320px) | iPhone 6/7/8 (375px) | iPhone XR (414px) | iPad Mini (768px) | iPad Air (820px) | Surface Pro 7 (912px) | iPad Pro (1024px) | Desktop (1201px) | Desktop (2000px)
<= 576px | Good | Good | Good | NA | NA | NA | NA | NA | NA
576px < >= 992px | NA | NA | NA | Good | Good | Good | NA | NA | NA
992px < | NA | NA | NA | NA | NA | NA | Good | Good | Good
Links/ URLs work | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes
Images work | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes
Renders as expected | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes

### Browser Compatibility

The site was tested in multiple browsers to ensure all features worked correctly and the site responded in the intended way no matter what browser was being used.

| | Browser | | | Notes
:--- | :--- | --- | --- | ---
| | Chrome | Edge | Firefox
Intended Appearance? | Yes | Yes | Yes | Site appears as expected on all browsers tested
Intended Responsiveness? | Yes | Yes | Yes | Site responds as expected on all browsers tested
API Functions as Expected? | Yes | Yes | Yes | Interactive map functions correctly in all browsers tested

### Code Validation

The HTML, CSS and JavaScript for the site was ran through a validator specific to each language, the results are shown in the table below.

| | Validations | Notes
---: | --- | ---
HTML | Checked on: https://validator.w3.org/ | **Errors:** Missing favicon. Images don't have alt attributes. The ID: 'inspo-btn' has been re-used. **Warnings:** Sections don't have headers.
CSS | Checked on: https://jigsaw.w3.org/css-validator/ | No errors or warnings found.
JavaScript | Checked on: https://jshint.com/ | **Errors:** Missing '()' on line 15 invoking a constructor. Missing ';' on line 83 and 138. 'button' was an unused variable.

The above errors were resolved and committed all at once to github. A favicon was added, the ID: 'inspo-btn' was changed to a class and the JavaScript syntax issues were resolved.

### User Story Testing

To ensure the site met the original user goal's outlined in the [User Experience](#user-experience) section, each goal was tested on the site to check that it was met by the finished site.

User Story | Testing
--- | ---
As a user I want to find new, highly rated areas to explore nearby. | On the Explore page, select the type of place you are looking for and press 'Submit'. Nearby places of that type will be presented on the map. You can click any of them to see what their star rating out of 5 is.
As a user I want to find recommendations for hiking near other areas to help plan future trips. | On the Inspiration page scroll through the list of places that have adventure guides, they contain recommendations for hiking and other activities.
As a user I want to read real people's reviews of near and far outdoor areas. | On the Explore page, once a place type has been selected and the map is showcasing the nearby places, by clicking on a place you can see it's star rating and a link to a website where reviews can be found. Also, on the Inspiration page you can read people's reviews of a certain place.
As a user I want to find a suitable place for an active getaway. | On the Inspiration page, you can scroll through a list of places with adventure recommendations to find you next getaway.
As a user I want to be able to ask questions about the places shown on the site. | On the Contact page, you can ask questions as well as submit your own recommendations for adventure guides.

### Feature Testing

The site features were tested to ensure they provided the correct feedback to the user.

Feature | Action | Effect
--- | --- | ---
Logo (all pages) | Hover over | Cursor changes to a pointer, colour changes to #7FFF30
| | Click | Direct users to index.html
Site Navigation (<768px wide) (all pages) | Hover over toggler | Cursor changes to a pointer, colour changes to #7FFF30
| | Click toggler | Opens dropdown navigation menu
| | Hover over page | Cursor changes to a pointer, colour changes to #7FFF30
| | Click page | Directs user to selected page
Site Navigation (>=768px wide) (all pages) | Hover over page | Cursor changes to a pointer, colour changes to #7FFF30
| | Click page | Directs user to selected page
Place Type Criteria | Hover over | Bug: A hover needs adding to this feature to provide suitable feedback to the user
| | Click | Opens a dropdown selection of place types
| | Hover over | Highlights the place type
| | Click | Selects the place type
Submit Place Type | Hover over | Cursor changes to a pointer, colour changes to #7FFF30
| | Click | Shows nearby places of that type on the map below
Map (index.html, oxford.html, bath.html & falmouth.html) | Click & Drag | Pan around the map
| | Ctrl & Scroll | Zoom in or out of the map
Map Markers (index.html, oxford.html, bath.html & falmouth.html) | Click | An info-window appears above the marker and a place card is opened beneath the map
Place Card | Hover over link | Cursor changes to a pointer, colour changes to #7FFF30
| | Click | Directs user to external webpage for that place. Bug: This doesn't open in a new tab
Footer Links (all pages) | Hover over | Cursor changes to a pointer, colour changes to #7FFF30
| | Click | Opens selected social page in a new tab
Inspiration Card Button | Hover over | Cursor changes to a pointer, colour changes to #7FFF30
| | Click | Directs user to selected adventure guide
Contact Form | Hover over data fields | Cursor changes to a text cursor, border colour changes to #7FFF30
| | Click in data field | Border changes to black, typing cursor appears in data field
| | Hover over 'SUBMIT' | Cursor changes to a pointer, colour changes to #7FFF30
| | Click 'SUBMIT' | If data fields filled in correctly: Directs user to thank you page. If data fields not filled in correctly: Alerts user which field is missing or has incorrect data

The only bug that came from this testing was the website links for a place did not open in a new tab. Therefore, to resolve this I added a setAttribute to the weblink variable to set the target of the link to _blank.

## Deployment

The site was deployed on GitHub Pages using the following steps:
1. Make sure the repository is Pulbic.
2. From the repository, go to the 'Settings' tab.
3. Go to 'Pages'.
4. Select 'Deploy from a branch' as the Source.
5. Select 'main' and '/root' as the Branch.
6. Click Save.
7. View the deployed site using the 'Visit site' button at the top of the page.

![alt text](assets/img/readme_imgs/deployment_steps.png "Title")

## Post-Deployment Testing

### Responsiveness

Once the site was deployed the responsiveness was checked on the same devices as in the Pre-Deployment Testing to ensure the deployed version worked in the same way.

Screen Width | | | | | Device | | | | |
---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---:
| | Galaxy S9+ (320px) | iPhone 6/7/8 (375px) | iPhone XR (414px) | iPad Mini (768px) | iPad Air (820px) | Surface Pro 7 (912px) | iPad Pro (1024px) | Desktop (1201px) | Desktop (2000px)
<= 576px | Good | Good | Good | NA | NA | NA | NA | NA | NA
576px < >= 992px | NA | NA | NA | Good | Good | Good | NA | NA | NA
992px < | NA | NA | NA | NA | NA | NA | Good | Good | Good
Links/ URLs work | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes
Images work | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes
Renders as expected | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes

### Browser Compatibility

Browser compatibility was tested again once the site was deployed to check the deployed version of the site still worked as expected in various browsers. Since the site was now deployed, I could test it in Safari as well, however this was only on mobile.

| | Browser | | | | Notes
:--- | :--- | --- | --- | --- | ---
| | Chrome | Edge | Firefox | Safari
Intended Appearance? | Yes | Yes | Yes | Yes (only tested on mobile)| Site appears as expected on all browsers tested
Intended Responsiveness? | Yes | Yes | Yes | Yes (only tested on mobile) | Site responds as expected on all browsers tested
API Functions as Expected? | Yes | Yes | Yes | Yes | Interactive map functions correctly on all browsers tested
Geolocation Handling | Good | Good | Good | Good | Site handles geolocation as intended on all browsers tested

### Bug Fixes

From post-deployment testing a small number of bugs were still found and needed to be resolved.

1. HTML pages that don't require JavaScript or the Maps API still had the script tags at the bottom of the page. This was removed to decrease loading times of those pages.

2. The console.log function was still left at the top of the guide page's JavaScript, this was also removed to decrease loading times of those pages.

### Lighthouse Testing

Lighthouse testing was carried out on each page of the site using Chrome Developer Tools. After each test, relevant changes were made and the site was re-deployed.

**Index.html**

The first test of index.html came back with good results, however they could be slightly improved. The performance and best practices rating couldn't be further improved because on load the site has an error due to the initMap function not having any criteria, this can only be resolved once the user inputs the place type they are searching for. The SEO rating, however could be improved by providing a description for the meta tag in the page head.

![alt text](assets/img/readme_imgs/index_lighthouse_1.png "Title")

After another lighthouse test, index.html came back with an improved rating. The SEO rating is now 100 and this change also increased the performance rating.

![alt text](assets/img/readme_imgs/index_lighthouse_2.png "Title")

**Inspiration.html**

The first test of inspiration.html came back with a perfect lighthouse score which was very encouraging.

![alt text](assets/img/readme_imgs/inspiration_lighthouse_1.png "Title")

**Contact.html**

The first test of contact.html also came back with a perfect lighthouse score.

![alt text](assets/img/readme_imgs/contact_lighthouse_1.png "Title")

**Oxford.html, Bath.html & Falmouth.html**

The first test of the guide pages came back with mixed results. The performance scores were slightly lower for oxford.html and falmouth.html, however was almost perfect for bath.html. I figured this was down to the main image resolution however, they are supposed to be the same across the three pages. I don't feel this is a necessary change, therefore will only be further looked at if there is time at the end of the project.

Oxford.html:

![alt text](assets/img/readme_imgs/oxford_lighthouse_1.png "Title")

Bath.html:

![alt text](assets/img/readme_imgs/bath_lighthouse_1.png "Title")

Falmouth.html:

![alt text](assets/img/readme_imgs/falmouth_lighthouse_1.png "Title")

### Future Improvements

Upon completing this project, I am very happy with the final result, considering this was my first time writing JavaScript code and it was a much steeper learning curve than HTML & CSS in project one.

However, there are some further improvements and changes I would like to make to the site. Some of these I didn't include originally because they are above my skillset and it would take too long to upskill my coding to incorporate them, I've marked these with an * for future reference. Others I simply did not have long enough to include them, these were mainly small styling changes.

The further improvements I would like to make are:
- Style the interactive map away from the default Google map.
- Incorporate a mixture of place types in the adventure guides.*
- Use CSS flexbox instead of bootstrap.*
- Jazz up the Weekend Wanderer logo.
- Allow the place card image to always fill the entire height of the card no matter the screen size.
- Make the geolocation status window disappear once the user has searched for a place type.*
- Turn the place web link into a button.*

## Credits & Acknowledgements

The navbar HTML was the same as in project one and was sourced from: https://bootstrap-menu.com/detail-fixed-onscroll.html?fbclid=IwAR3Hoo45FodP7x-jv1Rt9Cl6LSx2J2AKoAXP1qmmECSU2XaOZ35r7C97e4A. This aided in creating a customisable bootstrap navbar that would allow for a toggler button with dropdown on mobile and tablet.

The nearby search request on the interactive map was created following a Google Codelab tutorial and then customising and adding to the JavaScript code to suit my project: https://developers.google.com/codelabs/maps-platform/google-maps-nearby-search-js#0. This was needed to improve my JavaScript API skills, since this topic was not covered in great detail in the Code Institute course content.

The marker icons were sourced from: https://mapicons.mapsmarker.com/markers/sports/nature-sports/hiking/?fbclid=IwAR0-2GqPnfXBoB_sRXuvAz-dREf3_LEz4HCJXUz_Ohz2_T7LWEm2Z3LP34A. This aided in quickly generating different markers icons that still matched the site theme. By using sourced icons, more time could be focussed on the interactivity of the map.

Stock images were sourced from Unsplash
- oxford.jpg: Ben Seymour on Unsplash (https://unsplash.com/photos/nqBUTBsDQNM)
- bath.jpg: Alex Atudosie on Unsplash (https://unsplash.com/photos/FbEeHb7iWP4)
- falmouth.jpg: Kate Joyce on Unsplash (https://unsplash.com/photos/5-NiuYPO-UQ)