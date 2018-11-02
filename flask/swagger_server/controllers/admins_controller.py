import connexion
import six

from swagger_server.models.inventory_item import InventoryItem  # noqa: E501
from swagger_server import util


def add_inventory(inventoryItem=None):  # noqa: E501
    """adds an inventory item

    Adds an item to the system # noqa: E501

    :param inventoryItem: Inventory item to add
    :type inventoryItem: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        inventoryItem = InventoryItem.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def search_inventory(searchString=None, skip=None, limit=None):  # noqa: E501
    """searches inventory

    By passing in the appropriate options, you can search for available inventory in the system  # noqa: E501

    :param searchString: pass an optional search string for looking up inventory
    :type searchString: str
    :param skip: number of records to skip for pagination
    :type skip: int
    :param limit: maximum number of records to return
    :type limit: int

    :rtype: List[InventoryItem]
    """
    return 'do some magic!'
