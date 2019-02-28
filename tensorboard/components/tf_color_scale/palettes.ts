/* Copyright 2016 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
namespace tf_color_scale {

export const palettes = {
  googleStandard: [
    '#db4437',  // google red 500
    '#ff7043',  // deep orange 400
    '#f4b400',  // google yellow 500
    '#0f9d58',  // google green 500
    '#00796b',  // teal 700
    '#00acc1',  // cyan 600
    '#4285f4',  // google blue 500
    '#5c6bc0',  // indigo 400
    '#ab47bc'   // purple 400
  ],
  googleCool: [
    '#9e9d24',  // lime 800
    '#0f9d58',  // google green 500
    '#00796b',  // teal 700
    '#00acc1',  // cyan 600
    '#4285f4',  // google blue 500
    '#5c6bc0',  // indigo 400
    '#607d8b'   // blue gray 500
  ],
  googleWarm: [
    '#795548',  // brown 500
    '#ab47bc',  // purple 400
    '#f06292',  // pink 300
    '#c2185b',  // pink 700
    '#db4437',  // google red 500
    '#ff7043',  // deep orange 400
    '#f4b400'   // google yellow 700
  ],
  googleColorBlindAssist: [
    '#ff7043',  // orange
    '#00ACC1',  // dark cyan
    '#AB47BC',  // bright purple
    '#2A56C6',  // dark blue
    '#0b8043',  // green
    '#F7CB4D',  // yellow
    '#c0ca33',  // lime
    '#5e35b1',  // purple
    '#A52714',  // red
  ],
  // A colorblind-friendly palette designed for TensorBoard by Paul Tol
  // (https://personal.sron.nl/~pault/).
  tensorboardColorBlindAssist: [
    '#ff7043',  // orange
    '#0077bb',  // blue    
    '#cc3311',  // red
    '#33bbee',  // cyan    
    '#ee3377',  // magenta
    '#009988',  // teal
    '#bbbbbb',  // grey
  ],
  // These palettes try to be better for color differentiation.
  // https://personal.sron.nl/~pault/
  colorBlindAssist1:
      ['#4477aa', '#44aaaa', '#aaaa44', '#aa7744', '#aa4455', '#aa4488'],
  colorBlindAssist2: [
    '#88ccee', '#44aa99', '#117733', '#999933', '#ddcc77', '#cc6677', '#882255',
    '#aa4499'
  ],
  colorBlindAssist3: [
    '#332288', '#6699cc', '#88ccee', '#44aa99', '#117733', '#999933', '#ddcc77',
    '#cc6677', '#aa4466', '#882255', '#661100', '#aa4499'
  ],
  colorBlindAssist4: [
    // Paul Tol's "Alternative Scheme for Qualitative Data". Preferred
    // if `tensorboardColorBlindAssist` cannot be used for any reason.
    '#4477aa',
    '#66ccee',
    '#228833',
    '#ccbb44',
    '#ee6677',
    '#aa3377',
    '#bbbbbb',
  ],
  // based on this palette: http://mkweb.bcgsc.ca/biovis2012/
  colorBlindAssist5: [
    '#FF6DB6', '#920000', '#924900', '#DBD100', '#24FF24', '#006DDB', '#490092'
  ],
  mldash: [
    '#E47EAD', '#F4640D', '#FAA300', '#F5E636', '#00A077', '#0077B8', '#00B7ED'
  ],
  annotate16: [
    "#4fa753", "#bb52b5", "#93d65c", "#6253ba", "#cdbd56", "#5f406a", "#87d3ac", "#cd483e", "#6eb7d1", "#cd7f36", "#a897ce", "#606b32", "#c74b7a", "#3e6c62", "#793f2d", "#d0998a"
  ],
  annotate32: [
    "#3e6e2d", "#6d5ad2", "#a1d450", "#622a8c", "#6fdf7c", "#c958be", "#5aa342", "#d94981", "#59dbae", "#cc4143", "#7fd6de", "#da662c", "#7d79d4", "#cecc59", "#48396a", "#d6a334", "#7ba5dd", "#914e21", "#4f99ac", "#d68c5a", "#2d566e", "#8c8b3a", "#8c396c", "#b0d0a0", "#773135", "#5e967a", "#d3a3d2", "#314f33", "#ca8387", "#746c98", "#dab88f", "#685532"
  ],
  annotate100: [
    '#cc5151', '#7f3333', '#51cccc', '#337f7f', '#8ecc51', '#597f33', '#8e51cc', '#59337f', '#ccad51', '#7f6c33', '#51cc70', '#337f46', '#5170cc', '#33467f', '#cc51ad', '#7f336c', '#cc7f51', '#7f4f33', '#bccc51', '#757f33', '#60cc51', '#3c7f33', '#51cc9e', '#337f62', '#519ecc', '#33627f', '#6051cc', '#3c337f', '#bc51cc', '#75337f', '#cc517f', '#7f334f', '#cc6851', '#7f4133', '#cc9651', '#7f5e33', '#ccc451', '#7f7a33', '#a5cc51', '#677f33', '#77cc51', '#4a7f33', '#51cc59', '#337f37', '#51cc87', '#337f54', '#51ccb5', '#337f71', '#51b5cc', '#33717f', '#5187cc', '#33547f', '#5159cc', '#33377f', '#7751cc', '#4a337f', '#a551cc', '#67337f', '#cc51c4', '#7f337a', '#cc5196', '#7f335e', '#cc5168', '#7f3341', '#cc5d51', '#7f3a33', '#cc7451', '#7f4833', '#cc8a51', '#7f5633', '#cca151', '#7f6533', '#ccb851', '#7f7333', '#c8cc51', '#7d7f33', '#b1cc51', '#6e7f33', '#9acc51', '#607f33', '#83cc51', '#527f33', '#6ccc51', '#437f33', '#55cc51', '#357f33', '#51cc64', '#337f3e', '#51cc7b', '#337f4d', '#51cc92', '#337f5b', '#51cca9', '#337f69', '#51ccc0', '#337f78', '#51c0cc', '#33787f', '#51a9cc', '#33697f'
  ]
};

export const standard = palettes.annotate32;

}  // namespace tf_color_scale
