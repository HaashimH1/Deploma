# History University Website
History of Universitys, a comprehensive website dedicated to exploring the rich and diverse history of universities in the west particularly. This site aims to provide an in-depth look at the evolution of higher education institutions, highlighting their significant milestones and the impact they have had on society. Our target audience is directed towards current higher education students or people who have already been to university, but in general adults since this can be a fact heavy article with alot of references.
![Am i responsive snippet](documentation_images/readme_1.png)

[Live Website Link](https://haashimh1.github.io/Deploma/)


## Interface Structure / Features Justification

This site consits of 5 main sections: Navigation bar, 3 pages and a footer. The pages are aas floating pages so its one big scrollable website instead of 3 different wesbite files. Note that when this documentation refers to 'smaller' or 'bigger' screens, smaller screens is refering to mostly mobile phones or in particular screen widths of less than 768 pixels, bigger screens is of tablets or desktops of 768 pixels or more in its width.

* Overall features
  * Colour Scheme - I chose to go with a simple black, grey and white scheme for this site as it suits an article feel as theres no necesity for popping colours as this site is directed more towards adults, and is also one of the best contrasting schemes for people who may have visual impairments.
  * Font - A google font know as 'Nunito' as this is a sleek yet eye catching font that is perfect for the aesthetic for a history website.

* Navigation Bar
  * A bar at the top of the screen that holds links to different section of the website for easy and quick navigation with a black background as it easily seperates itself from the main conent of the page to a user as this bar has a much different purpose to the main content of the page. On all screen sizes it house a clickable logo, which redirects user to the very top of the website. All links on the Nav bar have a smooth scroll effect to its destination using JavaScript.

    * Smaller screens - houses a button which opens a dropdown menu which holds links to all 3 pages on this website. When dropdown opens, the toggle buttons text changes to a downward arrow signsignifying that it is open. 
    
    ![Nav bar mobile](documentation_images/readme_2.png)
    ![Dropdown menu on mobile](documentation_images/readme_3.png)

    * Bigger screens - All 3 page links are already present in the original Nav bar with no dropdown menu present as there is more pace to work with. This time with a hover transition which emphasizes the link hovered over.
    * ![Nav bar on bigger screens](documentation_images/readme_4.png)
    * ![Link hover transition](documentation_images/readme_5.png)

* Page 1 - Intro Page
  * This page is split into 2 segments. 1st Segment consists of an intro message and a picture to set the scene of the website, helps user visualize the content provided.
  
    * Smaller screen it is stacked ontop of eachother
      * ![page 1 on mobile](documentation_images/readme_6.png)
    * Bigger screeen stacked sideways
      * ![page 1 on bigger screens](documentation_images/readme_7.png)

  * 2nd Segment consists of two intro paragraphs with another image. This is to give a brief summary of the website before the user gets into the fact heavy content to help ease in. This is where we get into the main Page segments of each page as its shown by the white box content with a shadow around it, this will be same theme with the other 2 page segments aswell.
     * Bigger screens / Smaller Screens
  * ![Page 1 bigger screens](documentation_images/readme_9.png) ![Page 1 Smaller screens](documentation_images/readme_8.png)

* Page 2 - Timeline Page
  * The purpose of this page is to provide a linear timeline showcasing its history, consists of 5 different time periods each with a date range, heading, image and a handfull of bullet points of content for that time period. The image in each time period is crucial since it gives the user a visual representation of what the environment would look like in a university in each period. Again the whole timeline is wrapped around a white box with a shadow on its sides. Below are a few examples of how it would look.

    * Bigger screens, half of the time periods images and content are flipped to add some diversity in the page and not seem all the same.
      * ![Page 2 bigger screen time period 1](documentation_images/readme_10.png)
      * ![Page 2 bigger screen time period 4](documentation_images/readme_11.png)
    * Smaller screens, content just stacked veritcally as theres not much room for diversity
      * ![Page 2 smaller screens timeperiod 2](documentation_images/readme_12.png) ![Page 2 smaller screens time period 3](documentation_images/readme_13.png)

* Page 3 - Reference Page
  * This page is to provide as many references to historic yet authentic books i can find to back up all the facts i had displayed in the timeline. This helps to further engage the user as it mostly likely an adult who come to this page, and they tend to be skeptical about websites they are unfamiluar with so this helps to clear the doubt and ensure the user. This is the final time i use the white box with a shadow on its sides as this is the last page.
  
    * Page is split into 5 sections, each representing a time period from the timeline. Each section containing the time periods naem, which facts I used and its reference.
    * Bigger Screens, with more space provided content is seperated more to add extra visual clarification to each heading and its content.
      * ![Page 3 Bigger screens](documentation_images/readme_15.png)
    * Smaller screens, less space to work with so no extra space between heading and its content
      * ![Page 3 Smaller screens](documentation_images/readme_14.png)
* Footer
  * Only purpose of the footer is to provide a link to my github, in the form of clickable github logo, and some text naming the author of this website. Footer copys the design and colour scheme of the Nav bar to again emphasize to the user the much different purpose and content of these bars.
  * Bigger and smaller screens only differences are the position of the content container, as theres not any necesity to design the content differently because of the small amount of content placed here.
    * Smaller Screens
      * ![Footer Smaller screens](documentation_images/readme_16.png)
    * Bigger Screens
      * ![Footer Bigger screens](documentation_images/readme_17.png)


## Testing

| Action                              | Expected Result              | Pass/Fail |
|-------------------------------------|------------------------------|-----------|
| Dropdown button, when closed        | Shows dropdown menu          | Pass      |
| Dropdown button, when open          | Hide dropdown menu           | Pass      |
| Dropdown button content             | Button text changes          | Pass      |
| Dropdown Page clicked               | Hide dropdown and then scroll| Pass      |
| Page links / logo clicked           | Smooth scroll to destination | Pass      |
| GitHub logo click                   | Open Github repo new tab     | Pass      |
| All links clicked                   | Open in new tab              | Pass      |
| Image file path broken              | Alt text                     | Pass      |



## Validating Code

* HTML
  * No errors were returned when passing through the official [W3C Validator](https://validator.w3.org/)
* CSS
  * No errors were returned when passing through the official [Jigsaw Validator](https://validator.w3.org/)
* Lighthouse
  * Scored high on both Mobile and Desktop.
    * ![Lighthouse score on desktop](documentation_images/readme_19.png)
    * ![Lighthouse score on mobile](documentation_images/readme_18.png)
* Wave
  * wys bro
    * ![Wave validator results](documentation_images/readme_20.png)





