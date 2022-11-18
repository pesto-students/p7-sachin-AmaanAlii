# Assignment 1.1

## A - What is the main functionality of the browser?
    The main functionality of a web browser is to read data from a server that is connected to the internet and 
    translates it into images and text.
    This data is enclosed in Hyper Text Markup Language (HTML) and a browser interprets this code to create 
    what we experience through text, sounds,
    images and videos.
    
    


## B - High Level Components of a browser.

    The main components are:
    
    The User Interface - This includes the menues, buttons, bars etc, that is, every part of the page that we see.
    
    The Browser Engine - Controls actions between the UI and the Rendering Engine
    
    The Rendering Engine - Responsible for displaying requests.
    
    Networking - This is used for network calls.
    
    UI backend - Used for drawing widgets. This backend exposes a generic interface that is not platform dependent.
    
    JavaScript Interpreter - It is used to parse and execute JavaScript Code.
    
    Data Storage - This is used to save data locally such as cookies. Browsers also support 
    storage mechanisms such as WebSQL etc.
    
    ![202351126-8add9f91-4ff2-434d-8371-16c816d585d5](https://user-images.githubusercontent.com/117629490/202457973-fcff0e26-4e7f-40ce-833b-63f7039202ff.png)
    
    
## C - Rendering engine and its use

    The use of the rendering engione is to display requested content on the browser's screen.
    By default the rendering engine can display HTML and XML documents and images. It can display other types of data by 
    using plug-ins or extensions.
    For example, displaying pdf information using a PDF viewer plug-in.
    
    
    ![Screenshot-2019-11-12-at-3 (1)](https://user-images.githubusercontent.com/117629490/202483289-cc3358d0-ae21-4f94-8031-806ad7894f84.png)

    
## D - Parsers (HTML, CSS, etc)

    Parsing a documnet means translating it into a structure that the code can use. The result is usually a tree of nodes 
    that represent the structure 
    of a document. This is called a parse tree or a syntax tree.
    
    The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. HTML tokens include 
    start and end tags, 
    as well as attribute names and values. If the document is well-formed, parsing it is straightforward and faster. 
    The parser parses tokenized input into the document, building up the document tree.    
    
## E - Script Processors    

    The script processor is used to define some simple processing logic that cannot be achieved easily using any of the
    provided processors.
    It runs an inline or stored script on incoming documents.
    The script processor uses the script cache to avoid recompiling the script for each incoming document.
    
## F - Tree Construction
     
    After the browser has created Nodes from the HTML document, it has to create a tree-like structure of these node objects. 
    Since our HTML elements in the HTML file are nested inside each other, the browser needs to replicate that but using 
    Node objects 
    it has previously created. This will help the browser efficiently render and manage the webpage throughout its lifecycle. 
    
    A DOM tree starts from the topmost element which is html element and branches out as per the occurrence and nesting of
    HTML elements in the document. Whenever an HTML element is found, it creates a DOM node (Node) object from its respective 
    class (constructor function).
    
## G - Order of script processing

    
## H - Layout and Paint

    Layout - The layout (also called reflow) will be in charge to calculate the positions and dimensions of each node on the screen. 
    For instance, if you rotate your phone, or if you resize your browser, the layout will be executed.
    
    
    Painting - Finally, now that we know which nodes are visible, and their computed styles and geometry, we can pass this
    information to the final stage, which converts each node in the render tree to actual pixels on the screen. 
    This step is often referred to as “painting”, “rasterizing.” or “repainting”.
