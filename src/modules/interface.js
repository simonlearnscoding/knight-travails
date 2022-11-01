export function UICreator() {

    // I give the object Some functions through prototypical inhericance and link it to some sections

    const ui = Object.create(proto)

    ui.body = document.body
    ui.container = ui.containerCreate()


    ui.title = ui.createTitle("Chess Game")
    ui.chessBoard = ui.createChessBoard()

    //TODO Prompt field, buttons, Notification field
    return ui
}


class placeholder{
    constructor() {
        this.body = document.body;
        this.content = document.createElement("div");
        content.id = 'content';
        this.body.appendChild(this.content);

        let classNames = ["title", "content", "bottom"];
        for (let classItem in classNames) {
            let item = this.addHTML("div", "", null, classNames[classItem]);
            this.content.appendChild(item);
        }
    }

    static loadHomepage() {
        UI.createMainStructure();
    }
    static createMainStructure() {
        UI.createMainSections()
    }
    static createMainSections() {

    }
}


const functions = {
    HTML : {

        // CREATE A NEW HTML ELEMENT
        addHTML(type='div', content='', classnames = null, id = null)
        {
            let element = document.createElement(type);
            element.innerHTML = content;
            this.giveHTMLIdentity(element, classnames, id);
            return element;
        },

        // GIVE THE HTML A CLASS AND AN IF GIVEN
        giveHTMLIdentity(element, classes, id) {
            this.addClasses(element, classes);
            this.addID(element, id);
            return element;
        },
        // GIVE THE ELEMENT ONE OR MULTIPLE CLASSES
        addClasses(element, classes) {
            if (classes !== null) {
                for (let name in classes) {
                    element.classList.add(classes[name]);
                }
            }
        },
        // GIVE THE ELEMENT AN ID
        addID(element, id) {
            if (id !== null) {
                element.id = id;
            }
        }
    },
    createElements : {
        createChessBoard() {
            const obj = this.addHTML();
            obj.id = 'chessboard';
            this.container.appendChild(obj);
            return obj
        },
        createTitle(Title) {
            const obj = this.addHTML();
            obj.innerText = Title
            obj.id = 'title'
            this.container.appendChild(obj)
            return obj
        },
        containerCreate() {
            const obj = this.addHTML();
            obj.id = 'container'
            this.body.appendChild(obj);
            return obj
        },
        promptFieldCreate() {},

        createMainStructure() {

        }

    }
}

const createPrototype = () => {
    const proto = {}
    for(const i of Object.values(functions)) {
        Object.assign(proto, i)
    }
    return proto

}
const proto = createPrototype()



const createElement = function( type ){
  return function(options) {
    const el = document.createElement(type);
    // And now, apply your options to that element!
    for(const funct of Object.values(options)) {
       funct(el)
    }
      return el;
  }
}

function appendChild(targetSelector) {
    return (element) => {
        const target = document.querySelector(targetSelector)
        target.appendChild(element)
    }
}
function giveID(id) {
    return (element) => {
        element.id = id
    }
}
export function createChessboardContent() {
    const options = {
        appendToChessBoard: appendChild('#chessboard'),
        giveID: giveID('chessboardContent')
    }

    return createDIV(options)

}
function addClasslists(classes) {
    return function(element) {
        for (const Class of classes) {
            element.classList.add(Class)
        }
    }
}
export const createFieldHTML = createFieldElement()

function createFieldElement() {
    let fieldCounter = 0
    let rowCount = 0

    return function createFieldHTML() {
        if(fieldCounter > 7) {
            rowCount ++
            fieldCounter = 0
        }
        function getColor(counter) {
            const color = ['black', 'white']
            const colorNum = (fieldCounter + rowCount) % 2
            fieldCounter++

            return color[colorNum]
        }
        const color = getColor(fieldCounter)
        const options = {
            appendToChessBoard: appendChild('#chessboardContent'),
            addClasslists : addClasslists(['chessfield', color]),
        }

        return createDIV(options)
    }
}


const createDIV = createElement('div');

const createTitle = createElement('h1');
// And now we can
const createImg = createElement("img");

