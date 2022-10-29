new Vue({
    el: '#app',
    data: {
        dummyFoto: [
            'https://d2huqozv2aqnkj.cloudfront.net/wp-content/uploads//2018/01/kompas_tark_5764599_133_1-720x480.jpeg',
            'https://i.pinimg.com/originals/e4/81/cb/e481cbc93bb6e063fe3029186383c855.jpg',
            'https://i1.wp.com/suwatu.com/gambar/Awang-awang-Sky-View-Magelang.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm84BIrkKS9bFKRq8RWd-cbHObZ34mjbbpAQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGN6Udf1N7ueV0C0_VBG0Ys6k5C2ls9I70AA&usqp=CAU',
            'https://d2huqozv2aqnkj.cloudfront.net/wp-content/uploads//2018/01/kompas_tark_5764599_133_1-720x480.jpeg',
            'https://i.pinimg.com/originals/e4/81/cb/e481cbc93bb6e063fe3029186383c855.jpg',
            'https://i1.wp.com/suwatu.com/gambar/Awang-awang-Sky-View-Magelang.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm84BIrkKS9bFKRq8RWd-cbHObZ34mjbbpAQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGN6Udf1N7ueV0C0_VBG0Ys6k5C2ls9I70AA&usqp=CAU'
        ],
        showBurger: false,
        showPreview: false
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