/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace product
 */

import {getUrlWithVariant, ProductForm} from '@shopify/theme-product-form';
import {formatMoney} from '@shopify/theme-currency';
import {register} from '@shopify/theme-sections';
import {forceFocus} from '@shopify/theme-a11y';
import $ from 'jquery';

register('product', {
  buttonNumber() {
    $(".btnS").on("click", function() {

      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
  
      if ($button.hasClass('add1')) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
       // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
  
      $button.parent().find("input").val(newVal);
  
    });
  },
  async onLoad() {
    this.buttonNumber();
  },
});
