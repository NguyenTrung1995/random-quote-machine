import * as React from 'react';
import styled from 'styled-components';
import { quotes } from './quotes.json';

const AppWrapper = styled.div`
  background: ${props => props.color};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
`

const Box = styled.div`
  width: 450px;
  background: #fff;
  border-radius: 3px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  color: ${props => props.color};
  transition: all 1s ease;
`

const QuoteText = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
`

const QuoteAuthor = styled.div`
  margin-bottom: 20px;

  span {
    float: right;
    font-size: 16px;

    &::before {
      content: '-';
      margin-right: 4px;
    }
  }
`

const BoxButton = styled.div`

`

const Button = styled.button`
  float: right;
  padding: 8px 18px 6px 18px;
  border: none;
  border-radius: 3px;
  background-color: ${props => props.color};
  outline: none;
  cursor: pointer;
  opacity: 1;
  font-size: 0.85em;
  color: #fff;
  transition: all 1s ease;

  &:hover {
    opacity: 0.9;
  }
`

interface State {
  quote: {
    quote: string,
    author: string
  },
  color: string
}

interface Props {

}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.state = {
      quote: quotes[Math.floor(Math.random()*quotes.length)],
      color: this.getRandomColor()
    }
  }

  handleRandomQuote = () => {
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    this.setState({
      quote,
      color: this.getRandomColor()
    })
  }

  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <AppWrapper color={this.state.color}>
        <Box color={this.state.color}>
          <QuoteText>
            {this.state.quote['quote']}
          </QuoteText>
          <QuoteAuthor>
            <span>{this.state.quote['author']}</span>
          </QuoteAuthor>
          <BoxButton>
            <Button 
              onClick={this.handleRandomQuote}
              color={this.state.color}
            >
              New quote
            </Button>
          </BoxButton>
        </Box>
      </AppWrapper>
    );
  }
}

export default App;
