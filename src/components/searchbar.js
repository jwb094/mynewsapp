import React from 'react';
import Searchlist from  '../components/searchlist';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term : ''
        };
        this.getValue = this.getValue.bind(this);
        }

        //get value from searchbar
        getValue() {
            this.setState({
                term:document.getElementById('search_term').value
            });
            
            //this.props.handleFormSubmit(this.state.term); <i class="inverted circular search link icon"></i>
            console.log(this.state.term);
            //return this.state.term;
          }
          
    render() {
            
        return(
            <section>

            
            <div className="ui grid">
                <div className="ui icon input eight wide column">
                                <input type="text" className="eight wide column" placeholder="Search..." id="search_term" />
                </div>
                <div className="ui icon input four wide column">
                                <button type="button" id="button-addon2"  onClick={this.getValue}>Button</button>
                </div>
            </div>
            <div className="ui sixteen wide column">
                <Searchlist />
            </div>
            </section>
  
        
            
            

            
      
            )
        }


}

export default SearchBar;


          {/* <div className="col-sm-12">
                <div className="input-group mb-3">
                    <input type="text" class="form-control" id="search_term" placeholder="Recipient's username" aria-describedby="button-addon2"></input>
                    <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={this.getValue}>Button</button>
                    </div>
                </div>
            </div>  */}