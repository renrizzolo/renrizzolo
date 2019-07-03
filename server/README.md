##Express server

This is a really basic 'CMS' implementation.
It's designed to be run locally.
The frontend is just pug and some vanilla js, it's definitely not supposed to look good.
Essentially I just didn't want to edit a json file/move around images in order to create/update project entries.
--
The projects are written to a json file, and copied to the Stencil app src for reading.
Quill is used for rich text editing for the html descriptions, and multer.