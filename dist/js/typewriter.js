class TypeWriter{
    
    constructor(textElement ,words ,wait=2000){
        console.log('----',textElement);
        this.textElement = textElement;
        this.words =words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait=parseInt(wait,10);
        this.type();
        this.isDeleting = false;
    }
    type(){
        const current = this.wordIndex%this.words.length;
        const fullTxt = this.words[current];
        if(this.isDeleting){
            this.txt = fullTxt.substring(0,this.txt.length-1)
        }else{
            this.txt = fullTxt.substring(0,this.txt.length+1)
        }

        this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 300;
        if(this.isDeleting){
            typeSpeed/=2;
        }

        if(!this.isDeleting&& this.txt === fullTxt){
            typeSpeed = this.wait;
            this.isDeleting = true;
        }else if(this.isDeleting&& this.txt === ''){
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }
        setTimeout(()=>this.type(),typeSpeed)
    }
    
}
window.onload = function(){
    var elements = document.getElementsByClassName('text-type');
    console.log()
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-words');
        var period = elements[i].getAttribute('data-wait');
        if (toRotate) {
          new TypeWriter(elements[i], JSON.parse(toRotate), period);
        }
 
    }
}