new Vue({
    el: '#app',
    data: {
        dummyFoto: [
            {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://d2huqozv2aqnkj.cloudfront.net/wp-content/uploads//2018/01/kompas_tark_5764599_133_1-720x480.jpeg'
            },
            {
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://i.pinimg.com/originals/e4/81/cb/e481cbc93bb6e063fe3029186383c855.jpg'
            },
            {
                text: '',
                src: 'https://i1.wp.com/suwatu.com/gambar/Awang-awang-Sky-View-Magelang.jpg'
            },
            {
                text: '',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm84BIrkKS9bFKRq8RWd-cbHObZ34mjbbpAQ&usqp=CAU'
            },
            {
                text: '',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm84BIrkKS9bFKRq8RWd-cbHObZ34mjbbpAQ&usqp=CAU'
            },
            {
                text: '',
                src: 'https://d2huqozv2aqnkj.cloudfront.net/wp-content/uploads//2018/01/kompas_tark_5764599_133_1-720x480.jpeg'
            },
            {
                text: '',
                src: 'https://i1.wp.com/suwatu.com/gambar/Awang-awang-Sky-View-Magelang.jpg'
            },
            {
                text: '',
                src: 'https://d2huqozv2aqnkj.cloudfront.net/wp-content/uploads//2018/01/kompas_tark_5764599_133_1-720x480.jpeg'
            },
            {
                text: '',
                src: 'https://i.pinimg.com/originals/e4/81/cb/e481cbc93bb6e063fe3029186383c855.jpg'
            },
        ],
        showBurger: false,
        showPreview: false,
        activeImg: 0
    },
    methods: {
        resizeMasonryItem(item){
            const grid = document.getElementsByClassName('masonry')[0],
                rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
                rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            console.log(rowGap, rowHeight)
            const rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = 'span '+rowSpan;
            item.querySelector('.masonry-content').style.height = rowSpan * 10 + "px";
        },
        resizeAllMasonryItems(){
            var allItems = document.getElementsByClassName('masonry-item');
            for(var i=0;i>allItems.length;i++){
              this.resizeMasonryItem(allItems[i]);
            }
        },
        waitForImages() {
            const vm = this
            const allItems = document.getElementsByClassName('masonry-item');
            for(let i=0;i<allItems.length;i++){
              imagesLoaded( allItems[i], function(instance) {
                const item = instance.elements[0];
                vm.resizeMasonryItem(item);
              } );
            }
        }

    },
    mounted(){
        this.$nextTick(() => {
            const vm = this
            vm.waitForImages()
            var masonryEvents = ['load', 'resize'];
            masonryEvents.forEach( function(event) {
                window.addEventListener(event, vm.resizeAllMasonryItems);
            } );
        });
    },
})