const renderDesign = document.querySelector('.renderDesign')

const listRenderHtml = ['example1', 'example2']
const listRenderThumbnail = ['theme1.png','theme2.png']

listRenderHtml.map((render, i) => renderDesign.innerHTML += `<div class="col-lg-3 col-md-4 text-center mb-2">
            <a href="/themes/`+ render + `.html" class="btn text-light rounded-1 mt-2 p-2"
              style="border: 1px solid var(--bs-dark-text);background-color:var(--bs-body-bg);">
              <img src="designImages/`+listRenderThumbnail[i]+`" alt="">
            </a>
          </div>`)