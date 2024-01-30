const URL = "https://kompege.ru/lk"
const mo = new MutationObserver(onMutation);
var hasScore = false
observe();

function onMutation() {
    const [wrap] = document.getElementsByClassName("table-wrap");
    console.log("mutation", hasScore)

    if (location.href !== URL) {
        hasScore = false
    }

    if (wrap && wrap.hasAttribute("data-v-2f22da39") && wrap.hasAttribute("data-v-e9e39a72") && !hasScore) {
        mo.disconnect();

        setTimeout(function () {
            const [wrap] = document.getElementsByClassName("table-wrap");
            const anotherWrap = wrap.children.item(0)
            let total = 0;

            for (const elem of anotherWrap.children) {
                if (elem.tagName !== "DIV") continue
                // console.log(elem.tagName)
                let score = elem
                    .getElementsByClassName("kim-table")
                    .item(0)
                    .children.item(1)
                    .firstChild.textContent
                total += parseInt(score)
            }
            const totalScore = document.createElement("p")
            totalScore.innerText = `Всего баллов: ${total}`
            hasScore = true
            anotherWrap.prepend(totalScore)
            mo.observe(document, {
                subtree: true,
                childList: true,
            });
        }, 300)


    }
}

function observe() {
    mo.observe(document, {
        subtree: true,
        childList: true,
    });
}