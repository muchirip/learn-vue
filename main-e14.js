Vue.component('modal', {
    template: `
    
    <div class="modal is-active">
        <div class="modal-background"></div>
            <div class="modal-card">
            <header class="modal-card-head">
             <p class="modal-card-title">
            

             </p>
                    

             <button class="delete"></button>
            </header>
        <section class="modal-card-body">
             Temporary content for now.
        </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
            </footer>
            </div>
        </div>
    `
    })
        new Vue({
        el: '#root',
        

});