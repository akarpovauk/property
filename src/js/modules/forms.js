
const forms = (sectionSearch, sectionSearchAdv) => {
	// forms('#search', '#search-advanced');
	const allForms = document.querySelectorAll('form');
	const inputMain = document.querySelectorAll('#search-input');
	const inputTenure = document.querySelectorAll('#tenure-input');
	const priceMin = document.querySelectorAll('#min-price');
	const priceMax = document.querySelectorAll('#max-price');
	const bedMin = document.querySelectorAll('#min-bed');
	const bedMax = document.querySelectorAll('#max-bed');
	const inputs = document.querySelectorAll('input');
	const selects = document.querySelectorAll('select');

	let statusMessage = document.createElement('div');
	let statusImg = document.createElement('img');

	let formState = {
		inputMain: '',
		bedMin: '0',
		bedMax: '0',
		priceMin: '0',
		priceMax: '0',
		tenureInput: '0'
	};
	
	const searchSection = document.querySelector(sectionSearch);
	const searchSectionAdv = document.querySelector(sectionSearchAdv);

	const message = {
		loading: 'Loading...',
		failure: 'Something went wrong...',
		spinner: 'icons/spinner.gif',
		fail: 'icons/not-found-magnifying-glass.svg'
	};

	let updateTitle = () => {
		let title = document.querySelector('#text').textContent;
		title = `Property for sale in ${formState.inputMain}`;
		document.querySelector('#text').textContent = title;
	};

	function showAdvancedSearch(selector, funcUpdateTitle) {
		searchSection.classList.add(selector);
		searchSectionAdv.classList.remove(selector);
		funcUpdateTitle();
	};

	function bindActionToElems(event, elem, prop) {
		elem.forEach((item) => {
			item.addEventListener(event, () => {
				elem.forEach((item) => {
					formState[prop] = item.value;
				});
			});
		});
	}

	bindActionToElems('input', inputMain, 'inputMain');
	bindActionToElems('change', inputTenure, 'tenureInput');
	bindActionToElems('change', priceMin, 'priceMin');
	bindActionToElems('change', priceMax, 'priceMax');
	bindActionToElems('change', bedMin, 'bedMin');
	bindActionToElems('change', bedMax, 'bedMax');

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
		selects.forEach(item => {
			item.value = '0';
		});
	};

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: 'POST',
			body: data
		});
		return await res.text();
	};

	function addStatusInfo(form, text, img) {
		let parent = form.parentNode;

		statusMessage.classList.add('status','form');
		statusMessage.textContent = text;
		
		parent.appendChild(statusMessage);

		statusImg.setAttribute('src', img);
		statusImg.classList.add('faded', 'status', 'status_img');
		statusMessage.appendChild(statusImg);
	}

	function clearStatusInfo() {
		statusMessage.remove();
	}

	allForms.forEach(form => {
		form.addEventListener('submit', (e) => {

			e.preventDefault();
			addStatusInfo(form, message.loading, message.spinner);

			const formData = new FormData(form);

			if (form.id = ('#search')) {
				showAdvancedSearch('hide', updateTitle); 
			}

			if (form.id = ('#search-advanced')) {
				console.log(formState);
				for (let key in formState) {
					if(key == 'inputMain') {
						formData.append(key, formState[key]);
					}
				}
			}

			postData('assets/server.php', formData)
				.then(res => {
					console.log(`my res is ${res}`);
				})
				.catch (() => {
					addStatusInfo(form, message.failure, message.fail);
				})
				.finally (() => {
					clearInputs();
					clearStatusInfo();
				});

		});
	});
};

export default forms;
