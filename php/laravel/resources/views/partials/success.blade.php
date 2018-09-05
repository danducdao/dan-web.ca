@if(session()->has('success'))
    <section>
        <p>
            <div class="alert alert-dismissable alert-success">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <ul>
                    <li><strong> {{ session()->get('success') }}</strong></li>
                </ul>
            </div>
        </p>
    </section>
@endif