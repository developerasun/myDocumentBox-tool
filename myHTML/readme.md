# Table of cotents
- [Headings]()
- [Headings]()
- [Headings]()
- [Headings]()
- [Headings]()

# Learning HTML5 Essentials

Took the below course summarized important topics. 
- [Free code camp : Basic HTML and HTML5](https://www.freecodecamp.org/learn/responsive-web-design/)
- [Free code camp : Applied accessibility](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/)

HTML is constantly updated, which latest one is HTML5. Declare HTML version like below so that brower understands that it is dealing with a specific HTML version.
```html
<!-- HTML5 uses !DOCTYPE html. -->
<!DOCTYPE html>
<html>
    <!-- your code here -->
</html>
```

# Basic HTML and HTML5
As a convention, all HTML tags are lowercases. 

## Headings
Heading elements let browser know your website's structure. This means that they must have a semantic meaning and relate to each other. Choosing headings based on only size is a big mistake. Use CSS for resizing your elements. 

- h1 : main heading 
- h2~h6 : sub heading

Each page must always have one h1 tag, which is your main content of that page. The main heading and sub headings are used by search engines.

```html
<h1>Jake's Cat Gallery</h1>
<main>
    <h2> Find out world most beautiful cats </h2>
    <h3> Cats in United State </h3>
    <h3> Cats in Canada </h3>

    <h2> Why cat sleeps so much <h2>
    <h3> Psychology </h3>
    <h3> Biology </h3>
</main>
```

## Descriptive tags
HTML5 adopts more SEO-friendly and developer-friendldy tags for website. Tags such as main, header, nav have a built-in landmark feature for assistive devices used by visually impaired user. For example, 

- main : the main content of your webpage. should have only one.
- header : grouping introductory and repeated contents
- footer
- nav : the main navigation links
- video
- article : grouping the independent contents. Deciding whether or not if an element is an article is usually a judgement call.
- section : grouping thematically related contents. Use div element if there is no relationship between groups of content. 

These tags are similiar to div tag but they are differentiated by the fact that it cnan indicate information it contains. 

## Img and alt
All img elements in HTML5 must have an alt attribute. The alt attribute is used in screen reader and is displayed even when the image is not loaded. 

## Internal link with a tag
Internal links in webpage allows us to move around in the webpage. Create an id attribute in HTML element and then give the id as href attribute in anchor tag.

```html
<a href="#contact">Move to Contact</a>
<li id="contact">Contact</li>

```

Internal link is usually used to move down to some point in a webpage. One step further, you can can create a dead link with the hash symbol. 

## Form
Create a form to send data to server. 
```html
<form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="enter your cat name" required/>
    <button type="submit">Submit</button>
</form>
```

## Label and input
### Radio input
Radio button is a type of input. An input that is inside label will be automatically matched with the label. If the radio input's name is the same with other radio inputs, the inputs will be grouped. The for attribute in label tag is used by screen readers. 

```html
<form action="your_url">
    <label for="cat">Cat
        <input type="radio" id="cat" name="animal" value="cat" checked>Cat
    </label>
    <label for="dog">Dog
        <input type="radio" id="dog" name="animal" value="dog">Dog
    </label>
    <label for="hamster">Hamster
        <input type="radio" id="hamster" name="animal" value="Hamster">Hamster
    </label>
</form>

```
value attribute is the one that is actually being sent to server. If omitted, default value "on" is sent. Use the label text in lowercase as value. 

### Checkbox input
Related checkbox inputs should have the same name as related radio inputs had.
```html 
<label for="cool">Cool
    <input type="checkbox" id="cool" name="personality" value="cool" checked>
</label>
<label for="funny">funny
    <input type="checkbox" id="funnt" name="personality" value="funny">
</label>
<label for="loving">loving
    <input type="checkbox" id="loving" name="personality" value="loving">
</label>
```

## Division element
div is a general purpose container for other elements. 

# Applied accessibility
## Understanding alt
Alt helps visually impaired users by providing text alternative to image. The users only get understanding of your webpage by screen reader, which is audio-based. Adding alt attribute is considered mandatory in HTML5.

<img src="cat-alt.png" alt="alt example" width=350 height=150 />

## Audio
Multimedia content, meaning having image and audio, requires web developer to know how to add transcript and caption in markup. This is for visually or auditory impaired users. 

```html
<audio controls>
    <source src="reference/screen-reader-example.mp3" type="audio/mpeg" />
</audio>
```

## Figure and figcaption
Figure and figcaption improves data visualization accessiblity like chart.

```html
<section>
    <figure>
        <img src="reference/pie-chart.png" alt="pie chart" width=378 height=243 />
        <figcaption> Empty pie chart example</figcaption>
    <figure>
</section>
```

## Form field
The fieldset tag surrounds a group inputs(checkboxes, radios ...) to provide a better accessibility. For example, 

```html
<fieldset>
    <legend>Difficulty Choice</legend>
        <label for="easy">Easy</label>
        <input type="radio" name="choice" id="easy" />
        <label for="intermediate">Intermediate</label>
        <input type="radio" name="choice" id="intermediate" />
        <label for="hard">Hard</label>
        <input type="three" name="choice" id="hard" />
</fieldset>
```

The legend tag describes the inputs, as title.