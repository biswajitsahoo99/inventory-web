import react, { Component } from "react";
import { Button } from 'antd';

export class Liquid extends Component {

  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/page1">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Concentrated Liquid Soap</a></strong><br />
          <small>Pioneers in the industry, we offer target concentrated liquid soap from India.</small>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">Target&nbsp;Concentrated&nbsp;Liquid&nbsp;Soap</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/harppic.jpg" width="80%" /></a></div>
        </div><br />
        <div class="btn3">
          <Button type="primary" size="large">Get Best<b>Quote</b></Button>
        </div>
        <div class="infor">
          <h6>Approx. Price : <b>Rs 55</b>/ Bottle</h6>
          <Button type="primary" size="large">Get Latest Price</Button>

          <table>
            <h3><b>Product Details:</b></h3><br />
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Home, Office etc</td>
            </tr>
            <tr>
              <td>Ingredient</td>
              <td>Chemical</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Fragrance</td>
              <td>Aloe Vera, Lavender</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>1L</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Bottle</td>
            </tr>
          </table><br />
          <h4>We are offering<b>Target Concentrated Liquid Soap.</b></h4>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Other Details : </b>
          <li>Extra Power</li>
          <Button id="but" type="primary" size="large">Yes! I am Interested</Button>

        </div><br />

        <div class="containe ptr bdr1"></div><br />

      </div>

    );
  }
}

