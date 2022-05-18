<script>
export default {
    name: 'EditProfilPage'
}
</script>

<template>
<div class="d-flex justify-content-center">
<div class="col-lg-8">
	<div class="card">
		<div class="card-body d-flex flex-column bg-light">
            <div class="mb-4 input-cache">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle d-block mx-auto" width="180">
                <label for="file-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                </svg>
                </label>
                <input id="file-input" type="file"/>
            </div>
            <div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Métier</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="Developpeur Full Stack">
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Nom Complet</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="John Doe">
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Email</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="john@example.com">
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Fixe</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="01 00 00 00 00">
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Mobile</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="07 00 00 00 00">
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Adresse</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="6 rue Jean, Paris">
				</div>
			</div>
            <div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Site Web</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="https://monsite.com">
				</div>
			</div>
            <div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Github</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="https://github.com">
				</div>
			</div>
            <div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Twitter</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="https://twitter.com">
				</div>
			</div>
            <div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Instagram</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="https://instagram.com">
				</div>
			</div>
            <div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Facebook</h6>
				</div>
				<div class="col-sm-9 text-secondary">
					<input type="text" class="form-control" placeholder="https://facebook.com">
				</div>
			</div>
			<div class="row">
				<div class="text-secondary text-center">
					<input type="button" class="btn btn-danger px-4" value="Sauvegarder">
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</template>

<style scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}
.me-2 {
    margin-right: .5rem!important;
}

.card .card-body > div:first-child {
    position: relative;
    align-self: center;
}

.card-body img {
    border: 1px solid var(--bs-gray-300);
}

svg {
    color: var(--bs-gray-400);
    position: absolute;
    bottom: 0;
    right: 0;
    transition: 200ms;
}

svg:hover{
    cursor: pointer;
    color: var(--bs-gray-500);
    animation: shake 0.80s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
}

.input-cache input {
    display: none;
}

.input-cache label {
    position: absolute;
    right: 0;
}

@keyframes shake {
    10%, 90% {
    transform: translate3d(-2px, 0, 0);
    }

    20%, 80% {
    transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
    }

    40%, 60% {
    transform: translate3d(2px, 0, 0);
    }
}
</style>