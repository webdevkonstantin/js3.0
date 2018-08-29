class Options {
  constructor(width='400px', height='300px', bg='grey', color='white', fontSize='24px', textAlign='center') {
    this.width = width;
    this.height = height;
    this.bg = bg;
    this.color = color;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  create(text) {
    let div = document.createElement('div');
    div.style.cssText = `width: ${this.width};
                         height: ${this.height};
                         background: ${this.bg};
                         color: ${this.color};
                         font-size: ${this.fontSize};
                         text-align: ${this.textAlign};`;
    div.innerHTML = text;
    document.body.appendChild(div);
  }
}

let div1 = new Options(),
    div2 = new Options('500px','200px','red','white','32px','left');

div1.create("Привет Мир!");
div2.create("Aloha Hawaii!");