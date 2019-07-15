import * as React from "react";
import styled from "styled-components";
import { quotes } from "./quotes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const AppWrapper = styled.div`
  background: ${props => props.color};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
`;

const Box = styled.div`
  width: 450px;
  background: #fff;
  border-radius: 3px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  color: ${props => props.color};
  transition: all 1s ease;
  margin-bottom: 20px;

  & > span {
    display: flex;
    flex-direction: column;
  }

  .example-appear {
    opacity: 0.01;
  }

  .example-appear.example-appear-active {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
`;

const QuoteText = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
  position: relative;

  svg {
    position: absolute;
    top: 2px;
  }

  span {
    padding-left: 30px;
  }
`;

const QuoteAuthor = styled.div`
  margin-bottom: 20px;

  span {
    float: right;
    font-size: 16px;

    &::before {
      content: "-";
      margin-right: 4px;
    }
  }
`;

const BoxButton = styled.div``;

const Button = styled.button`
  float: right;
  padding: 8px 18px;
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
`;

const MadeBy = styled.span`
  color: #fff;
`

interface State {
  quote: {
    quote: string;
    author: string;
  };
  color: string;
}

interface Props {}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.state = {
      quote: quotes[Math.floor(Math.random() * quotes.length)],
      color: this.getRandomColor()
    };
  }

  handleRandomQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      quote,
      color: this.getRandomColor()
    });
  };

  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    return (
      <AppWrapper color={this.state.color}>
        <Box color={this.state.color}>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={300}
            transitionLeave={300}
          >
            <QuoteText>
              <FontAwesomeIcon icon={faQuoteLeft} size="xs" />
              <span>{this.state.quote["quote"]}</span>
            </QuoteText>
            <QuoteAuthor>
              <span>{this.state.quote["author"]}</span>
            </QuoteAuthor>
          </ReactCSSTransitionGroup>
          <BoxButton>
            <Button onClick={this.handleRandomQuote} color={this.state.color}>
              New quote
            </Button>
          </BoxButton>
        </Box>
        <MadeBy>by TrungNguyen1995</MadeBy>
      </AppWrapper>
    );
  }
}

export default App;
