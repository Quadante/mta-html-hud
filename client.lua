
local screenWidth, screenHeight = guiGetScreenSize()

--Let's create a new browser in local mode. We will not be able to load an external URL.
local webBrowser = createBrowser(screenWidth, screenHeight, true, true)

--This is the function to render the browser.
function webBrowserRender()
    dxDrawImage(0, 0, screenWidth, screenHeight, webBrowser)
end

setDevelopmentMode(true, true) -- Enable client dev mode
--The event onClientBrowserCreated will be triggered, after the browser has been initialized.
--After this event has been triggered, we will be able to load our URL and start drawing.
addEventHandler("onClientBrowserCreated", webBrowser, 
    function()
        --After the browser has been initialized, we can load our file.
        loadBrowserURL(source, "http://mta/local/html/index.html")
        addEventHandler("onClientRender", root, webBrowserRender)
    end
)

addEventHandler('onClientPlayerWeaponSwitch', localPlayer,
function(_, switchedWeapon)
	setHudElementValue('weapon', getPedWeapon(localPlayer, switchedWeapon))
end)
addEventHandler("onClientRender", root,
	function()
		setHudElementValue('money', exports.global:formatMoney(getElementData(localPlayer,"money")))
		setHudElementValue('bankmoney', exports.global:formatMoney(getElementData(localPlayer,"bankmoney")))
		setHudElementValue('hunger', getElementData(localPlayer,"hunger"))	
	end)

	addEventHandler("onClientRender", root,
	function()
			setHudElementValue('thirst', getElementData(localPlayer,"thirst"))	
		if getPlayerWeapon (localPlayer) > 0 then
		setHudElementValue('ammo',getPedAmmoInClip ( localPlayer )..'/'..getPedTotalAmmo(localPlayer))
		end
	end)
function setHudElementValue(element, value)
    executeBrowserJavascript(webBrowser, [[
        set(']]..element..[[', ']]..value..[[')
    ]])
end
