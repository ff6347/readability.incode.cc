document.addEventListener('DOMContentLoaded', () => {
  // get all the checkboxes and uncheck them
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  const inputFontFamily = document.getElementById('font-family');
  const inputFontSize = document.getElementById('font-size');
  const lineLength = document.getElementById('line-length');
  const lineHeight = document.getElementById('line-height');
  const margin = document.getElementById('margin');
  const padding = document.getElementById('padding');
  const smallTweaks = document.getElementById('small-tweaks');

  inputFontFamily.addEventListener('change', (event) => {
    fontFamilyHandler(event.target.checked);
  });

  inputFontSize.addEventListener('change', (event) => {
    fontSizeHandler(event.target.checked);
  });

  lineLength.addEventListener('change', (event) => {
    lineLengthHandler(event.target.checked);
  });

  lineHeight.addEventListener('change', (event) => {
    lineHeightHandler(event.target.checked);
  });

  margin.addEventListener('change', (event) => {
    marginHandler(event.target.checked);
  });

  padding.addEventListener('change', (event) => {
    paddingHandler(event.target.checked);
  });

  smallTweaks.addEventListener('change', (event) => {
    smallTweaksHandler(event.target.checked);
  });

  // get the urlsearchparams checked value. If it is true, check the checkbox
  const urlSearchParams = new URLSearchParams(window.location.search);
  if (urlSearchParams.has('checked')) {
    const checked = urlSearchParams.get('checked');
    if (checked === 'true') {
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          checkbox.checked = true;
          smallTweaksHandler(true);
          paddingHandler(true);
          marginHandler(true);
          lineHeightHandler(true);
          lineLengthHandler(true);
          fontSizeHandler(true);
          fontFamilyHandler(true);
        });
    }
  }
});
function fontFamilyHandler(checked) {
  if (checked) {
    console.log('checked');
    document.getElementById('font-family-code').classList.remove('hidden');

    document.querySelectorAll('code').forEach((element) => {
      element.classList.add('monospace');
    });
    document.body.classList.add('font-family');
  } else {
    document.getElementById('font-family-code').classList.add('hidden');

    document.querySelectorAll('code').forEach((element) => {
      element.classList.remove('monospace');
    });
    document.body.classList.remove('font-family');
  }
}

function fontSizeHandler(checked) {
  if (checked) {
    document.documentElement.setAttribute('class', 'text-size');
    document.getElementById('font-size-code').classList.remove('hidden');
  } else {
    document.documentElement.removeAttribute('class');
    document.getElementById('font-size-code').classList.add('hidden');
  }
}

function lineLengthHandler(checked) {
  if (checked) {
    document.body.classList.add('line-length');
    document.getElementById('line-length-code').classList.remove('hidden');
    document.querySelectorAll('pre').forEach((element) => {
      element.classList.add('line-length');
      element.classList.add('pre');
    });
  } else {
    document.body.classList.remove('line-length');
    document.getElementById('line-length-code').classList.add('hidden');
    document.querySelectorAll('pre').forEach((element) => {
      element.classList.remove('line-length');
      element.classList.remove('pre');
    });
  }
}

function lineHeightHandler(checked) {
  if (checked) {
    document.body.classList.add('line-height');
    document.getElementById('line-length-code').classList.remove('hidden');
  } else {
    document.body.classList.remove('line-height');
    document.getElementById('line-length-code').classList.add('hidden');
  }
}

function marginHandler(checked) {
  if (checked) {
    document.getElementById('margin-code').classList.remove('hidden');
    document.body.classList.add('margin');
  } else {
    document.getElementById('margin-code').classList.add('hidden');

    document.body.classList.remove('margin');
  }
}

function paddingHandler(checked) {
  if (checked) {
    document.body.classList.add('padding');
    document.querySelectorAll('pre').forEach((element) => {
      element.classList.add('padding-pre');
    });
    document.getElementById('padding-code').classList.remove('hidden');
    document.querySelectorAll('h1,h2,h3,input').forEach((element) => {
      element.classList.add('padding');
    });
  } else {
    document.body.classList.remove('padding');
    document.querySelectorAll('pre').forEach((element) => {
      element.classList.remove('padding-pre');
    });

    document.getElementById('padding-code').classList.add('hidden');
    document.querySelectorAll('h1,h2,h3,input').forEach((element) => {
      element.classList.remove('padding');
    });
  }
}

function smallTweaksHandler(checked) {
  if (checked) {
    document.body.classList.add('colors');
    document.querySelectorAll('pre').forEach((element) => {
      element.classList.add('colors-pre');
    });
    document.querySelectorAll('hr').forEach((element) => {
      element.classList.add('hr');
    });
    document.getElementById('small-tweaks-code').classList.remove('hidden');
  } else {
    document.querySelectorAll('hr').forEach((element) => {
      element.classList.remove('hr');
    });
    document.body.classList.remove('colors');
    document.querySelectorAll('pre').forEach((element) => {
      element.classList.remove('colors-pre');
    });
    document.getElementById('small-tweaks-code').classList.add('hidden');
  }
}
