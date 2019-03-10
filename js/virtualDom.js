 
 /**   JS 模拟实现VirtualDOM
  * @param {String} tag 'div'
  * @param {Object} props { class: 'item' }
  * @param {Array} children [ Element1, 'text']
  * @param {String} key option
  */
 
  class Element {
      constructor(tag, props, children, key){
         this.tag = tag
         this.props = props
         if(Array.isArray(children)){
          this.children = children;
         }else if(typeof (children) === 'string'){
          this.key = children;
          this.children = null;
         }
         if(key) this.key = key;
      }
      render(){
          let root = this._createElement(this.tag,this.props,this.children,this.key);
          document.body.appendChild(root);
          return root;
      }
      create(){
          return _createElement(this.tag,this.props,this.children,this.key);
      }
      _createElement(tag,props,children,key){
          let el = document.createElement(tag);
          for(key in props){
              if(props.hasOwnProperty(key)){
                  const value = props[key];
                  el.setAttribute(key, value)
              }
          }
          if(key){
              el.setAttribute('key',key);
          }
          if(children){
              children.forEach((element,index)=>{
                  let child;
                  if(element instanceof Element){
                     child = _createElement(
                         element.tag,
                         element.props,
                         element.children,
                         element.key
                     )
                  }else{
                      child = document.createTextNode(element);
                  }
                  el.appendChild(child);
              })
          }
          return el;
      }
  }